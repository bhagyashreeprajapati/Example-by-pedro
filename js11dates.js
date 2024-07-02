let today = new Date();
console.log(today); // Wed Jun 05 2024 10:36:38 GMT+0100 (Western European Summer Time)

let ms = Date.now();
console.log(ms); // 1717580453360
// number of milliseconds since epoch - time at 1 January 1970

let past = new Date(0);
console.log(past); // Thu Jan 01 1970 01:00:00 GMT+0100 (Western European Standard Time)

let pastDate1 = new Date(-12345678999);
console.log(pastDate1); // Mon Aug 11 1969 03:38:41 GMT+0100 (Western European Summer Time)

let date = "2024-06-05"; // this is a string
let newDate = new Date(2024, 1, 24, 12, 34, 45, 200);
console.log(newDate); // Sat Feb 24 2024 12:34:45 GMT+0000 (Western European Standard Time)

let newDate2 = new Date("2024-02-24 12:34:45.200");
console.log(newDate2); // Sat Feb 24 2024 12:34:45 GMT+0000 (Western European Standard Time)

console.log(newDate.toString()); // Sat Feb 24 2024 12:34:45 GMT+0000 (Western European Standard Time)

console.log(newDate.toDateString()); // Sat Feb 24 2024
console.log(newDate.toTimeString()); // 12:34:45 GMT+0000 (Western European Standard Time)

console.log(newDate.toLocaleString()); // 2/24/2024, 12:34:45 PM
console.log(newDate.toLocaleString("pt")); // 24/02/2024, 12:34:45
console.log(newDate.toLocaleString("de")); // 24.2.2024, 12:34:45
console.log(newDate.toLocaleDateString("de")); // 24.2.2024
console.log(newDate.toLocaleTimeString("de")); // 12:34:45

// 2024-06-05 - ISO Date
console.log(newDate.toISOString()); // 2024-02-24T12:34:45.200Z
console.log(newDate.toISOString().slice(0, 10)); // 2024-02-24

// extract parts of current date/time
console.log("Current Year: " + today.getFullYear()); // 2024
console.log("Current Month: " + today.getMonth()); // 5 - 0-based
// current day
console.log("Current Day: " + today.getDate()); // 5
// weekday
console.log("Current Week Day: " + today.getDay()); // 3 - 0-based - 0 - Sunday / 6 - Saturday

// create a function that receives a number, which is the month, and returns the name of that month

function getMonthName(month) {
    // 0 - January
    // 11 - December

    // if (month === 0) {
    //     return "January";
    // } else if (month === 1) {
    //     return "February";
    // } else if (month === 2) {
    //     return "March";
    // } else if (month === 6) {
    //     return "July";
    // } else {
    //     return "Wrong month/number";
    // }

    // switch (month) {
    //     case 0:
    //         return "January";
    //     // break;
    //     case 1:
    //         return "February";
    //     case 2:
    //         return "March";
    //     case 6:
    //         return "July";
    //     default:
    //         return "Wrong month/number";
    // }

    if (month > 11) {
        return "Wrong month/number";
    }
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];

}

console.log(getMonthName(2)); // March
console.log(getMonthName(6)); // July
console.log(getMonthName(12)); // Wrong month/number
