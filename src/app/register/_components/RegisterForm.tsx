'use client'

import { useFormik } from 'formik'
import React, { useState } from 'react'
import { RegisterSchema as validationSchema } from '@/validationSchemas/register.schema'
import { Input, Select, Button, Card, Space, InputNumber, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import Swal from 'sweetalert2'
import { jobOptions, statusOptions } from '@/app/constants/appConstants'
import { formatDate } from '@/lib/utils'
import { appendData } from '@/actions/google-sheet.action'

const initialValues = {
    status: '',
    jobs: [],
    phone: '',
    fullName: '',
    birthYear: '',
}

export default function RegisterForm() {
    const [isLoading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true)

                const rowData = [
                    '=ROW()-3',
                    values.fullName,
                    values.phone,
                    values.birthYear,
                    values.status,
                    values.jobs.join(', '),
                    formatDate(new Date().toISOString()),
                ]
                await appendData(rowData)

                Swal.fire({
                    title: 'Đăng ký thông tin thành công!',
                    icon: 'success',
                    draggable: true,
                })
                formik.resetForm()
            } catch (error) {
                Swal.fire({
                    title: 'Đăng ký thông tin thất bại!',
                    text: `${error}`,
                    icon: 'error',
                    draggable: true,
                })
            } finally {
                setLoading(false)
            }
        },
    })
    return (
        <>
            <Card
                style={{
                    maxWidth: 800,
                    margin: '0 auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
            >
                <form onSubmit={formik.handleSubmit} id="form">
                    <Space
                        direction="vertical"
                        size="large"
                        style={{ width: '100%' }}
                    >
                        {/* Trạng thái */}
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '500',
                                    color: '#262626',
                                }}
                            >
                                Trạng thái
                                <Tooltip title="Chọn trạng thái hiện tại của bạn">
                                    <InfoCircleOutlined
                                        style={{
                                            marginLeft: 8,
                                            color: '#1890ff',
                                        }}
                                    />
                                </Tooltip>
                            </label>
                            <Select
                                placeholder="Chọn trạng thái"
                                size="large"
                                style={{ width: '100%' }}
                                value={formik.values.status}
                                onChange={(value) =>
                                    formik.setFieldValue('status', value)
                                }
                                onBlur={() => formik.handleBlur('status')}
                                status={
                                    formik.touched.status &&
                                    formik.errors.status
                                        ? 'error'
                                        : ''
                                }
                                options={statusOptions.map((item) => ({
                                    label: item,
                                    value: item,
                                }))}
                                optionRender={(option) => {
                                    return <p>{option.label}</p>
                                }}
                            />
                            {Boolean(formik.touched.status) &&
                                formik.errors.status && (
                                    <div
                                        style={{
                                            color: '#ff4d4f',
                                            fontSize: '14px',
                                            marginTop: '4px',
                                        }}
                                    >
                                        {formik.errors.status}
                                    </div>
                                )}
                        </div>

                        {/* Công việc */}
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '500',
                                    color: '#262626',
                                }}
                            >
                                Công việc quan tâm
                                <Tooltip title="Chọn tối đa 3 vị trí công việc bạn quan tâm">
                                    <InfoCircleOutlined
                                        style={{
                                            marginLeft: 8,
                                            color: '#1890ff',
                                        }}
                                    />
                                </Tooltip>
                            </label>
                            <Select
                                mode="multiple"
                                placeholder="Chọn công việc (tối đa 3)"
                                size="large"
                                style={{ width: '100%' }}
                                value={formik.values.jobs}
                                onChange={(value) =>
                                    formik.setFieldValue('jobs', value)
                                }
                                onBlur={() => formik.handleBlur('jobs')}
                                status={
                                    formik.touched.jobs && formik.errors.jobs
                                        ? 'error'
                                        : ''
                                }
                                maxTagCount={3}
                                options={jobOptions.map((item) => ({
                                    label: item,
                                    value: item,
                                }))}
                                optionRender={(option) => {
                                    return <p>{option.label}</p>
                                }}
                            />
                            {Boolean(formik.touched.jobs) &&
                                formik.errors.jobs && (
                                    <div
                                        style={{
                                            color: '#ff4d4f',
                                            fontSize: '14px',
                                            marginTop: '4px',
                                        }}
                                    >
                                        {formik.errors.jobs}
                                    </div>
                                )}
                        </div>

                        {/* SĐT */}
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '500',
                                    color: '#262626',
                                }}
                            >
                                Số điện thoại
                                <Tooltip title="Nhập số điện thoại gồm đúng 10 chữ số">
                                    <InfoCircleOutlined
                                        style={{
                                            marginLeft: 8,
                                            color: '#1890ff',
                                        }}
                                    />
                                </Tooltip>
                            </label>
                            <Input
                                placeholder="Nhập số điện thoại (10 chữ số)"
                                size="large"
                                maxLength={10}
                                style={{ width: '100%' }}
                                value={formik.values.phone}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    formik.setFieldValue(
                                        'phone',
                                        e.target.value
                                    )
                                }
                                onBlur={() => formik.handleBlur('phone')}
                                status={
                                    formik.touched.phone && formik.errors.phone
                                        ? 'error'
                                        : ''
                                }
                            />
                            {Boolean(formik.touched.phone) &&
                                formik.errors.phone && (
                                    <div
                                        style={{
                                            color: '#ff4d4f',
                                            fontSize: '14px',
                                            marginTop: '4px',
                                        }}
                                    >
                                        {formik.errors.phone}
                                    </div>
                                )}
                        </div>

                        {/* Họ và tên */}
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '500',
                                    color: '#262626',
                                }}
                            >
                                Họ và tên
                                <Tooltip title="Nhập họ tên đầy đủ (tối đa 50 ký tự)">
                                    <InfoCircleOutlined
                                        style={{
                                            marginLeft: 8,
                                            color: '#1890ff',
                                        }}
                                    />
                                </Tooltip>
                            </label>
                            <Input
                                placeholder="Nhập họ và tên đầy đủ"
                                size="large"
                                maxLength={50}
                                showCount
                                value={formik.values.fullName}
                                onChange={(e) =>
                                    formik.setFieldValue(
                                        'fullName',
                                        e.target.value
                                    )
                                }
                                onBlur={() => formik.handleBlur('fullName')}
                                status={
                                    formik.touched.fullName &&
                                    formik.errors.fullName
                                        ? 'error'
                                        : ''
                                }
                            />
                            {Boolean(formik.touched.fullName) &&
                                formik.errors.fullName && (
                                    <div
                                        style={{
                                            color: '#ff4d4f',
                                            fontSize: '14px',
                                            marginTop: '4px',
                                        }}
                                    >
                                        {formik.errors.fullName}
                                    </div>
                                )}
                        </div>

                        {/* Năm sinh */}
                        <div>
                            <label
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '500',
                                    color: '#262626',
                                }}
                            >
                                Năm sinh
                                <Tooltip title="Nhập năm sinh từ 1900 đến 2010">
                                    <InfoCircleOutlined
                                        style={{
                                            marginLeft: 8,
                                            color: '#1890ff',
                                        }}
                                    />
                                </Tooltip>
                            </label>
                            <InputNumber
                                placeholder="Nhập năm sinh"
                                size="large"
                                style={{ width: '100%' }}
                                value={formik.values.birthYear}
                                onChange={(value) =>
                                    formik.setFieldValue('birthYear', value)
                                }
                                onBlur={() => formik.handleBlur('birthYear')}
                                status={
                                    formik.touched.birthYear &&
                                    formik.errors.birthYear
                                        ? 'error'
                                        : ''
                                }
                            />
                            {Boolean(formik.touched.birthYear) &&
                                formik.errors.birthYear && (
                                    <div
                                        style={{
                                            color: '#ff4d4f',
                                            fontSize: '14px',
                                            marginTop: '4px',
                                        }}
                                    >
                                        {formik.errors.birthYear}
                                    </div>
                                )}
                        </div>

                        {/* Submit Button */}
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                loading={isLoading}
                                style={{
                                    background:
                                        'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0 40px',
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {formik.isSubmitting
                                    ? 'Đang gửi...'
                                    : 'Gửi thông tin'}
                            </Button>
                        </div>
                    </Space>
                </form>
            </Card>
        </>
    )
}
