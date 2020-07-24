//let and const

let experience = 100
let wizardLevel = false
if(experience > 90){
     wizardLevel = true
}

console.log('Wizard Level', wizardLevel)

const checkData = (name) => {
    if(name.length > 5){
        console.log('Name: ',name)
    }
}

//destructuring
const car = {
    name: 'Volvo',
    model: '2019',
    price: 20000
}

const {name, model, price} = car;

console.log('CarName: ', name)
console.log('CarModel: ', model)
console.log('CarPrice: ', price)

//object properties
let characterName1 = 'Sam Fisher';
let characterName2 = 'Tom reed';

const characters = {
    [characterName1] : 'Hello guys!',
    [characterName2]: 'Whats up!'
}

//object with name and properties of variables
const car2 = {
    name,
    model,
    price
}

//template strings - using backticks
const carDef = `Hi, this is a ${name}, ${model} model. It goes for ${price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}`;

//default parameters
const greet = (name='Joshua', time='Afternoon') => {
    return `Hi, ${name}. Good ${time}`;
}


class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        super.introduce()
    }
}

//includes keyword
const pets = ['dogs', 'cats', 'rabbits'];
pets.includes('dogs');

//exponential keyword
const square = (x) => x**2;
const cube = (x) => x**3;

//pad start and pad end
const firstname = 'Joshua'
const lastname = 'Emmanuel'
firstname.padStart(10)
lastname.padEnd(10)

//using the JS interface Object on objects
const users = {
    user1: 'Joshua',
    user2: 'Praise',
    user3: 'Jeremiah'
}

Object.keys(users).forEach(key => {
    console.log(key)
});

Object.values(users).forEach(values => {
    console.log(values)
})

const testArray = [];

Object.entries(users).forEach(entries => {
    console.log(entries)
    testArray.push(entries);
})

let obj5 = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
Object.entries(obj5).map(value => value.join(" ")).join(' ')