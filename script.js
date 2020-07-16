function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

var age = calculateAge(1992);
console.log(age);

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [1, 3, 4, 5, 7];
var arr3 = [];

//check for duplicates in two arrays
function checkArray() {
    for(var i = 0;i <arr1.length;i++){
        for(var j = 0;j < arr2.length;j++){
            if(arr1[i] != arr2[j]){

            }else{
                arr3[i] = arr1[i];
                console.log(arr1[i]);
            }
        }
    }
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

//sort function - sorts the array
listOfAnimals.sort();
console.log('After sort function: ' + listOfAnimals)

//fill function - fills elements in an array depending on conditions parsed
let testArray = [1, 2, 3, 4, 5, 6];
//fills the whole array with 6
console.log(testArray.fill(6));

//fills the array with number 5 from index 3
console.log(testArray.fill(5,3));

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

//JavaScript Exercise 1
const createArray = (arraySize, value) => {
    return Array(arraySize).fill(value);
}

console.log(createArray(5, 'b'));

//JavaScript Exercise 2
const reverseArray = (array) => {
    let newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4]));

//JavaScript Exercise 3