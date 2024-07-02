// Luxon is a library which allows the parsing, validation, manipulation and displaying of dates and times

let dt = luxon.DateTime;

const newDate = dt.local(2022, 6, 23, 9, 25);

console.log(newDate); // Fri Jun 14 2024 09:00:28 GMT+0100 (Western European Summer Time)

console.log(newDate.toISO()); // 2022-06-23T09:25:00.000+01:00

const now = dt.now();
console.log(now.toISO()); // 2024-06-14T09:02:24.340+01:00

const newDate2 = dt.fromObject({ day: 22, hour: 10 }, { zone: 'America/Los_Angeles' });
console.log(newDate2.toISO()); // 2024-06-22T10:00:00.000-07:00

const newDate3 = dt.fromISO("2022-07-08T08:30:00");
console.log(newDate3.toISO()); // 2022-07-08T08:30:00.000+01:00

console.log(now.year); // 2024

console.log(dt.now().plus({ days: 7 }).toISO()); // 2024-06-21T09:15:04.449+01:00

console.log(dt.now().plus({ days: 15 }).toFormat('dd.MM.yyyy')); // 29.06.2024

// dt.toLocaleString({ locale: "es"})

console.log(dt.now().setLocale('pt').toFormat("cccc, dd  'de' MMMM 'de' yyyy"));

console.log(dt.now().toFormat('dd.MMMM. yyyy')); // 29.06.2024

console.log(dt.now().setLocale('de').toFormat('ff')); // 14. Juni 2024, 09:31

// Using the Date "plain" JavaScript object calculate the date 7 days from now
// dt.now().plus({ days: 7 }).toISO() // 2024-06-21

let ms = Date.now();
console.log(ms); // 1718355777667
let sevenDays = 7 * 24 * 60 * 60 * 1000;
let sevenDaysFromNow = ms + sevenDays;
let sevenDaysDate = new Date(sevenDaysFromNow);
console.log(sevenDaysDate.toLocaleString("pt")); // 21/06/2024, 10:05:11

console.log(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleString("pt"));
