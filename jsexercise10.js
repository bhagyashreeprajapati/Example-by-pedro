// Remove the repeated numbers inside an array.
// For example, if we have the following array,
// [12, 6, 6, 6, 6, 3, 12, 8, 6, 5, 5, 6, 6, 6]

// The result should be:

// [12,6,3,8,5]

// Usha's solution
let list = [12, 6, 3, 12, 8, 6, 5, 5];
let result = [];
for (let number of list) {
    if (!result.includes(number)) {
        result.push(number);
    }
}
console.log(result); // [12, 6, 3, 8, 5]

// using filter - strange solution
let result2 = [];
// list.filter(number => {
//     if (!result2.includes(number)) {
//         result2.push(number);
//     }
// });
list.filter(number => (!result2.includes(number)) ? result2.push(number) : '');
console.log(result);

let test = [12, 6, 6, 6, 6, 3, 12, 8, 6, 5, 5, 6, 6, 6];

// Anna's solution 1
// [3, 5, 5, 6, 6, 6, 6, 8, 12, 12]
function removeRepeatedNumbersSorted(list) {
    let sortedArray = [...list];
    sortedArray.sort((a, b) => (a - b));
    let newArray = [];

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i + 1]) {
            newArray.push(sortedArray[i])
        }
    }
    return newArray;
}
console.log(removeRepeatedNumbersSorted(test));

// Anna's solution 2
// [12, 6, 6, 6, 6, 3, 12, 8, 6, 5, 5, 6, 6, 6];
function removeRepeatedNumbers(list) {
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        let repeat = false;
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] === list[j]) {
                repeat = true;
                break;
            }
        }
        if (repeat === false) {
            newArray.push(list[i])
        }
    }
    return newArray;
}

console.log(removeRepeatedNumbers(test));

// ============================================================
// Using the splice method to remove an element from an array. 
// ============================================================

// Miriam's solution
function removeDuplicates(array) {
    array.sort((a, b) => a - b); // [3, 5, 5, 6, 6, 6, 6, 8, 12, 12]
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1);
        }
    }
    return array;
}

let originalArray = [12, 6, 3, 12, 6, 6, 6, 6, 8, 6, 5, 6, 5, 6, 6, 6, 6];
console.log(removeDuplicates([...originalArray]));

// another version
let list2=[12, 6, 6, 6, 6, 3, 12, 8, 6, 5, 5, 6, 6, 6]; 
let pos=0;
while (pos<list2.length) {
    let valueToSearch=list2[pos];
    let i=pos+1;
    while (i<list2.length) {
        if (list2[i]===valueToSearch) {
            list2.splice(i,1);
        } else {
            i++;
        }
    }
    pos++;
}
console.log(list2);

// yet another version
let list3=[12, 6, 6, 6, 6, 3, 12, 8, 6, 5, 5, 6, 6, 6];
let pos2=0;
while (pos2<list3.length) {
    let searchRepeated=list3.indexOf(list3[pos2], pos2+1);
    while (searchRepeated!==-1) {
        list3.splice(searchRepeated,1);
        searchRepeated=list3.indexOf(list3[pos2], pos2+1);
    }
    pos2++;
}
console.log(list3);




