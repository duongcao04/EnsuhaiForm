import * as yup from 'yup'

export const RegisterSchema = yup.object({
    status: yup
        .string()
        .required('Vui lòng chọn trạng thái!'),
    
    jobs: yup
        .array()
        .of(yup.string())
        .min(1, 'Vui lòng chọn ít nhất 1 công việc!')
        .max(3, 'Chỉ được chọn tối đa 3 công việc!')
        .required('Vui lòng chọn ít nhất 1 công việc!'),
    
    phone: yup
        .string()
        .required('Vui lòng nhập số điện thoại!')
        .matches(/^[0-9]{10}$/, 'Số điện thoại phải có đúng 10 chữ số!')
        .length(10, 'Số điện thoại phải có đúng 10 chữ số!'),
    
    fullName: yup
        .string()
        .required('Vui lòng nhập họ và tên!')
        .max(50, 'Họ tên không được vượt quá 50 ký tự!')
        .trim(),
    
    birthYear: yup
        .number()
        .required('Vui lòng nhập năm sinh!')
        .min(1900, 'Năm sinh phải từ 1900 đến 2010!')
        .max(2010, 'Năm sinh phải từ 1900 đến 2010!')
        .integer('Năm sinh phải là số nguyên!')
})

// Export type for TypeScript
export type RegisterFormData = yup.InferType<typeof RegisterSchema>