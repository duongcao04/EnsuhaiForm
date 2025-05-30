'use server'

import { google } from 'googleapis'

export async function getGoogleSheetsClient() {
    try {
        const auth = await google.auth.getClient({
            projectId: process.env.NEXT_GOOGLE_PROJECT_ID,
            credentials: {
                type: 'service_account',
                project_id: process.env.NEXT_GOOGLE_PROJECT_ID,
                private_key_id: process.env.NEXT_GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.NEXT_GOOGLE_PRIVATE_KEY,
                client_email: process.env.NEXT_CLIENT_EMAIL,
                universe_domain: 'googleapis.com',
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        })

        const sheets = google.sheets({ version: 'v4', auth })
        return sheets
    } catch (error) {
        console.error('Error authenticating with Google Sheets:', error)
        throw error
    }
}

export async function getSheetData() {
    const glSheets = await getGoogleSheetsClient()

    try {
        const response = await glSheets.spreadsheets.values.get({
            spreadsheetId: process.env.NEXT_SHEET_ID,
            range: process.env.NEXT_SHEET_RANGE,
        })

        const rows = response.data.values || []
        console.log(`Đọc được ${rows.length} hàng`)

        return rows
    } catch (error) {
        console.error('Error reading sheet:', error)
        throw error
    }
}

export async function appendData(rowData: unknown[]) {
    try {
        const glSheets = await getGoogleSheetsClient()

        const response = await glSheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_SHEET_ID,
            range: process.env.NEXT_SHEET_RANGE,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [rowData],
            },
        })

        console.log(
            'Data appended successfully:',
            response.data.updates?.updatedRange
        )
        return {
            success: true,
            updatedRange: response.data.updates?.updatedRange,
            updatedRows: response.data.updates?.updatedRows,
            updatedColumns: response.data.updates?.updatedColumns,
            updatedCells: response.data.updates?.updatedCells,
        }
    } catch (error: unknown) {
        console.error('Error append data:', error)
        throw new Error(
            `Failed to append data: ${
                error instanceof Error ? error.message : String(error)
            }`
        )
    }
}
