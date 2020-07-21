function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

var age = calculateAge(1992);
// console.log(age);

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [1, 3, 4, 5, 7];
var arr3 = [];

//check for duplicates in two arrays
function checkArray() {
    // for(var i = 0;i <arr1.length;i++){
    //     for(var j = 0;j < arr2.length;j++){
    //         if(arr1[i] != arr2[j]){

    //         }else{
    //             arr3[i] = arr1[i];
    //             console.log(arr1[i]);
    //         }
    //     }
    // }
}

// checkArray();

//String functions

//Math functions




//array functions
let listOfAnimals = ['Cat', 'Bear', 'Chicken', 'Elephant', 'Tiger', 'Gorilla'];

//shift function - removes one element from the beginning of the array
listOfAnimals.shift();
console.log('After shift function: ' + listOfAnimals);

//pop function -  removes one element from the end of the array
listOfAnimals.pop();
console.log('After pop function: ' + listOfAnimals)

//push function - adds one element to an array from the end
listOfAnimals.push('Peacock');
console.log('After push function: ' + listOfAnimals);

//concat function - adds another array to an array from the end
var myNewList = listOfAnimals.concat(['Goat', 'Dog']);
console.log('After concat function: ' + myNewList);

//fill function - fills elements in an array depending on conditions parsed
let testArray = [1, 2, 3, 4, 5, 6];
//fills the whole array with 6
console.log(testArray.fill(6));

//fills the array with number 5 from index 3
console.log(testArray.fill(5, 3));

//fills the array with number 5 from index 3 to index 7 (creates index, if it doesn't exist)
console.log(testArray.fill(5, 3, 4));

//splice function - can be used to add new elements in an array
listOfAnimals.splice(2, 0, "Pig", "Ram");
console.log('After splice function: ' + listOfAnimals)

//splice function - delete items from array
listOfAnimals.splice(2, 2);
console.log('After splice function - delete: ' + listOfAnimals);

//slice function - select items from an array into a new one
var newStuff = listOfAnimals.slice(0, listOfAnimals.length);
console.log('New array with slice function: ' + newStuff);

//sort function - sorts the array
listOfAnimals.sort();
console.log('After letter sort function: ' + listOfAnimals)

//sort function for numbers - sort numbers
var numArray = [1, 4, 2, 3, 6, 8, 7, 9, 5];
console.log('After number sort function: ' + numArray.sort(function (a, b) { return a - b }));

//sort function for numbers - sort numbers in random order
console.log('After number random sort function: ' + numArray.sort(function (a, b) { return 0.5 - Math.random() }));

//max element in an array
function maxArray(arr) {
    var len = arr.length;
    var max = -Infinity;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log('Max Array function: ' + maxArray([1, 3, 5, 9, 10]));
console.log('Max Array function - method 2: ' + Math.max.apply(null, [1, 2, 3, 4]));


//min element in an array
function minArray(arr) {
    var len = arr.length;
    var min = Infinity;

    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log('Min Array function: ' + minArray([1, 3, 5, 9, 10]));
console.log('Min Array function - method 2: ' + Math.min.apply(null, [1, 2, 3, 4]));

//map function - performs actions on each element in an array and returns to a new array
var money = [10, 20, 30];
var moneyDoubled = money.map(doubleCash);

function doubleCash(element) {
    return element * 2;
}
console.log('After map function: ' + moneyDoubled);

//filter function - used to filter items into a new array based on a condition
var ageGroup = [1, 5, 9, 15, 18]
var filteredAgeGroup = ageGroup.filter(function (element) {
    return element > 5;
});
console.log('After filter function: ' + filteredAgeGroup);

//reduce function - used to run a function on every element in an array then reduce it to a single value
var scores = [45, 4, 9, 16, 25];
var sum = scores.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}
console.log('After reduce function: ' + sum);
//NB: reduceRight() starts from the right to left

//every function - used to check if all item in an array pass a test
var year = [2001, 2002, 2003, 2004, 2005, 2006, 2007];
var leapYear = year.every(checkYear);

function checkYear(year) {
    return year > 1999;
}
console.log('After every function: ' + leapYear);

//some function - used to check if some items in an array pass a test
var year1 = [2001, 2002, 2003, 2004, 2005, 2006, 2007];
var leapYear1 = year.some(checkYear1);

function checkYear1(year) {
    return year > 2002;
}
console.log('After some function: ' + leapYear1);

//find function - used to find the first element of an array that passed a test
var kidsAge = [2, 5, 7, 8, 9, 10, 15];
var firstKid = kidsAge.find(findAge);
//NB: findIndex() is used to get the first index of the element that passed the test

function findAge(age) {
    return age > 10;
}
console.log('After find function: ' + firstKid);



//JavaScript Exercise 1
const createArray = (arraySize, value) => {
    return Array(arraySize).fill(value);
}

console.log('Exercise 1: ' + createArray(5, 'b'));

//JavaScript Exercise 2
const reverseArray = (array) => {
    let newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log('Exercise 2: ' + reverseArray([1, 2, 3, 4]));

//JavaScript Exercise 3 
const compact = (array) => {
    let newArray = [];
    newArray = array.filter(function (element, index) {
        if (element === null || element === '' || element === false || element === undefined) {

        } else {
            return element;
        }
    });
    return newArray;
}

const data1 = [0, 1, false, 2, undefined, '', 3, null];
console.log('Exercise 3: ' + compact(data1));

//JavaScript Exercise 4
const fromPairs = (array) => {
    var object1 = {};
    array.map(function (innerArray) {
        object1[innerArray[0]] = innerArray[1];
    });
    return object1;
}

const fromPairs2 = (array) => array.reduce((acc, value) => {
    if (Array.isArray(value)) {
        acc[value[0]] = value[1];
    }
    return acc;
}, {});

const data2 = [['a', 1], ['b', 2]];
console.log(fromPairs2(data2));

//JavaScript Exercise 5
// -------> To be done

//JavaScript Exercise 6
// const unique = (array) => {
//     let newArray = [];
//     array.forEach(function (element) {
//         for (var i = 0; i < array.length;i++) {
//             if(element != array[i] ){
               
//             }else{
//                 console.log('Hi'+i);
//                 // break; 
//             }
//         }
//     });
//     return newArray;
// }

// const data3 = [1, 2, 1, 2, 3];
// console.log(unique(data3));


//JavaScript Date
// new Date() - Initialises date object with current date and time
var currentDate = new Date();

// new Date(year, month, day, hour, minutes, second, milliseconds) - Initialises date object with specified date
var date1 = new Date(2020, 11, 28, 10, 33, 30, 0);

// new Date(milliseconds) - Initialises date object with specified millisecond
var date2 = new Date(3292);

// new Date(date string) - Initialises date object with a date string
var date2 = new Date("October 13, 2014 11:13:00");

/*
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/

let currentDay = Date.now();
let days = new Date(currentDay)
// console.log(days.getUTCDay());


//JavaScript Maths Functions

//Math.round - Rounds up an integer to its nearest value
console.log('4.4 = '+Math.round(4.4)); // - 4
console.log('4.5 = '+Math.round(4.5)); // - 5

//Math.pow - returns the value of the first integer to the power of the second
console.log('pow(5,5) = '+Math.pow(5,3));

//Math.sqrt - returns the square root of the specified integer
console.log('sqrt(100) = '+Math.sqrt(100));

//Math.abs - returns the nearest positive value of the specified integer
console.log('abs(-4.5) = '+Math.abs(-4.5));

//Math.ceil - returns the rounded up value of the specified integer
console.log('ceil(4.3) = '+Math.ceil(4.3));

//Math.floor - returns the rounded down value of the specified integer
console.log('floor(4.7) = '+Math.floor(4.7));

//Math.trunc - returns the integer value of a number
console.log('trunc(5.34) = '+Math.trunc(5.34));

//Math.random - can be used with Math.floor to generate random numbers
console.log('Random num(1 - 10) = '+(Math.floor(Math.random() * 10) + 1))  // returns a random integer from 1 to 10
console.log('Random num(0 - 10) = '+(Math.floor(Math.random() * 10)))  // returns a random integer from 0 to 10

