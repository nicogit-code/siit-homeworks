// 1. Display in the console the numbers from 1 to 20

for (let i = 1; ; i++) {
    console.log(i);
    if (i >= 20)
        break;
}


// 2. Display in the console the odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if( i % 2 != 0) {
        console.log(i);
    }
}


// 3.Compute the sum of the elements of an array and display it in the console (add all numbers in the array together)

let numbers = [5, 2, 8, 4, 5]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


// 4. Compute the maximum of the elements of an array and display it in the console
function maxNr(arr) {
    let max = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return(max);
}
    let input = [1, 35, 88, 56, 74, 44];
    let output = maxNr(input);
    console.log(output);


// 5. Compute how many times a certain element appears in an array (count the number of times one element of your choice is in the array)
let arr = [7, 9, 55, 7, 75, 99, 55, 109, 13, 9];
let sorted_arr = arr.sort(); 
let duplicates = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            duplicates.push(count.sorted_arr[i]);
        }
    }
console.log(duplicates.length);