export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}

export const convertDateFormat = (inputDate) => {
    const inputDateTime = new Date(inputDate);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = inputDateTime.toLocaleDateString('en-US', options);
    return formattedDate;
}