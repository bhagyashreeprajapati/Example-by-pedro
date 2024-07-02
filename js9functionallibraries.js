/*
functional libraries for working with arrays:

- underscore
- lodash
- ramda

*/

let values=[ 12, 35, 18, 3, 11, 25, 18 ];

let result=values.every(value => value>0);
console.log(result); // true

let result3=true;
for (let value of values) {
    if (value<=0) {
        result3=false;
        break;
    }
}
console.log(result3);

// let result2 = false;
// count = values.length;
// for (let value of values) {
//     if (value > 0) {
//         count--;
//         console.log(count);
//     }
//     if (count === 0) {
//         result2 = true;
//     }
// }
// console.log(result2);


let result2=values.every(value => value>10);
console.log(result2); // false

let result4=_.every(values,value => value>10);
console.log(result4); // false

// sort by country and then by name descending

let students2 = [
    {
        name: "Usha",
        country: "India",
    },
    {
        name: "Anna",
        country: "Germany"
    },
    {
        name: "Jasmina",
        country: "Croatia"
    },
    {
        name: "Baghyashree",
        country: "India"
    },
    {
        name: "Miriam",
        country: "Germany"
    }
]

let result5=_.orderBy(students2, ['country', 'name'], ['asc', 'desc']);
console.log(result5);
