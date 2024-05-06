export const serverUrl = "https://afripredictor.onrender.com";
export const webUrl = "https://afripredictor.com";
export const formatDate = (inputDate) => {
    // Convert inputDate string to a Date object
    var dateObj = new Date(inputDate);

    // Define months array for month name lookup
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Extract day, month, and year from the Date object
    var day = dateObj.getDate();
    var month = months[dateObj.getMonth()];
    var year = dateObj.getFullYear();

    // Format the date as "day Month year"
    var formattedDate = day + ' ' + month + ' ' + year;

    return formattedDate;
};
// Example usage
// var inputDate = "2024-10-10";
// var formattedDate = formatDate(inputDate);
// console.log(formattedDate); // Output: "10 Oct 2024"


export const getCurrentDateTime = () => {
    // Get current timestamp
    const currentTimestamp = new Date();

    // Extract date components
    const year = currentTimestamp.getFullYear();
    const month = currentTimestamp.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = currentTimestamp.getDate();

    // Extract time components
    const hours = currentTimestamp.getHours();
    const minutes = currentTimestamp.getMinutes();
    const seconds = currentTimestamp.getSeconds();

    // Format date and time components
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Return an object with date and time components
    return {
        date: formattedDate,
        time: formattedTime
    };
};

// Example usage
// const dateTime = getCurrentDateTime();
// console.log("Date:", dateTime.date);
// console.log("Time:", dateTime.time);

