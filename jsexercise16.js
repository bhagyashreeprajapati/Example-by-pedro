let values = [1, 3, 3, 5, 6];
// result
// 1,5
// 3,3

let sumResult = 6;
let results = [];
for (let i = 0; i < values.length - 1; i++) {
    // console.log(values[i]);
    for (let j = i + 1; j < values.length; j++) {
        // console.log(values[i] + " / " + values[j]);
        if (values[i] + values[j] === sumResult) {
            console.log(values[i] + " / " + values[j]);
            results.push([values[i], values[j]])
        }
    }
}
console.table(results);

// if (
//     array[i] + array[j] === sum &&
//     !result.includes(array[i] + "," + array[j])
//   ) {

// [ 1,5,3,3 ]
// [[1,5],[3,3]]

let results2 = [];
let sumResult2 = 6;
let leftPointer = 0;
let rightPointer = values.length - 1;
while (leftPointer !== rightPointer) {
    let sum = values[leftPointer] + values[rightPointer];
    if (sum === sumResult2) {
        results2.push([values[leftPointer], values[rightPointer]]);
    }
    if (sum > sumResult2) {
        rightPointer--;
    } else {
        leftPointer++;
    }
}
console.table(results2);
