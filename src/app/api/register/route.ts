'use server'

import { appendData } from '@/actions/google-sheet.action'
import { formatDate } from '@/lib/utils'

export async function POST(request: Request) {
    try {
        const formData = await request.json()

        const rowData = [
            '=ROW()-3',
            formData.fullName,
            formData.phone,
            formData.birthYear,
            formData.status,
            formData.jobs.join(', '),
            formatDate(new Date().toISOString()),
        ]

        const result = await appendData(rowData)

        return Response.json(result)
    } catch (error) {
        return Response.json(
            {
                success: false,
                error: error as string,
            },
            { status: 500 }
        )
    }
}
