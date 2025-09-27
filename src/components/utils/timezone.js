export function getTimezoneInfo(data) {
    if (!data || typeof data.timezone !== "number") {
        return null; // invalid input
    }

    const offsetSeconds = data.timezone;
    const offsetHours = offsetSeconds / 3600;

    // Format UTC offset
    const utcOffset = `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`;

    // Get local time at that location
    const timestamp = data.dt ? data.dt : Math.floor(Date.now() / 1000); // fallback to current time if dt missing
    const localTime = new Date((timestamp + offsetSeconds) * 1000);

    return {
        utcOffset,
        localTime
    };
}
