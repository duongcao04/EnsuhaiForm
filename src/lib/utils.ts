import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(isoString: string) {
    const date = new Date(isoString)

    // Get hours and minutes in 24-hour format
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const timeString = `${hours}:${minutes}`

    // Format date part
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const dateString = `${day}/${month}/${year}`

    return `${timeString} - ${dateString}`
}
