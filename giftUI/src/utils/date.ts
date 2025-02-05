// Path: src/utils/date.ts

/**
 * Get the current date in a human-readable format.
 * Accepts a timestamp, a MongoDB date (ISO string), or a Date object.
 * @param date - The date input (timestamp, MongoDB ISO string, or Date object).
 * @returns A formatted string like "day.month.year at hours:minutes".
 */
export function formatDate(date: string | number | Date): string {
    const d = new Date(date);
    
    if (isNaN(d.getTime())) {
        throw new Error("Invalid date provided");
    }

    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");

    return `${day}.${month}.${year} at ${hours}:${minutes}`;
}
