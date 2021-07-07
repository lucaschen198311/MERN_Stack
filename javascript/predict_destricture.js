//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log('problem 1: ')
console.log(randomCar) //'Tesla'
console.log(otherRandomCar) //'Mercedes'

//problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log('problem 2: ')
console.log(name); // error
console.log(otherName); //'Elon'

//problem 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log('problem 3: ')
console.log(password); //'12345'
console.log(hashedPassword); //undeined

//problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log('problem 4: ')
console.log(first == second); //false
console.log(first == third); //true

//Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log('problem 5: ')
console.log(key); //'value'
console.log(secondKey); //[1,5,1,8,3,3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5

