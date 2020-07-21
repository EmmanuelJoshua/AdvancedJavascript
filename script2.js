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

