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
    // var year = dateObj.getFullYear();

    // Format the date as "day Month year"
    var formattedDate = day + ' ' + month;

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

export const isDeviceLaptop = () => {
    // Get the screen width and height
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    // Define the threshold screen size (e.g., 10 inches)
    const thresholdScreenSize = 12.8; // inches
    // Calculate the diagonal screen size using Pythagoras' theorem
    const diagonalInches = Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)) / 96; // Assuming standard DPI of 96
    // Check if the device has a touchscreen
    const hasTouchScreen = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;
    
    // Check if the device has a keyboard
    const hasKeyboard = "keyboard" in navigator && typeof navigator.keyboard !== 'undefined';

    // If the device has both a touchscreen and a keyboard, assume it's a laptop
    if (hasTouchScreen && hasKeyboard) {
        return true;
    } else if (hasTouchScreen && diagonalInches < thresholdScreenSize) {
        // If it has a touchscreen but no keyboard, assume it's a phone
        return false;
    } else {
        // If it doesn't have a touchscreen, assume it's a laptop
        return true;
    }

}


