/*const age = 30;

console.log(age); 
console.error('This is an error');
console.warn('Warning');

*/

/*types of VAriables

const name = 'myname';
const age = 30;
const isCool = true;
const x = null;
const y = undefined;
let z;
const rating = 2.5;


console.log(typeof(name));
*/
/*
//Concatenation
const name = 'Shakil';
const age = 94;
console.log('My name is ' +name + ' and my age is '+ age);
//template string
console.log(`My name is ${name} and I am ${age}`);

console.log(hell0)
*/
/*string  operations
const s = 'Technology, Computers, Theatre, Commands';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(2,5).toUpperCase());
console.log(s.split(','));
*/

//Arrays
/*
const numbers = new Array(1,2,3,4,5,6,7,8,9);
console.log(numbers);

const fruits = ['peras', 'oranges','capillas'];
console.log(fruits[0]);

fruits [3] = 'mango';

fruits.unshift('Strawberry');
fruits.push('banana');
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push('walla');
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

*/

//Object literals

/*
const person = {
    firstName: 'Shakil',
    lastName: 'Khan',
    age: 30,
    hobbies: ['music','movie', 'sports'],
    address: {
        street: 'ErkweisenStr',
        city: 'Boston',
        State: 'MA'
    }

}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

console.log(person.address.street);

const {firstName, lastName , address:{city}} = person;

console.log(city);


person.email = 'myname@gmail.com'
console.log(person);
*/
//Array of ToDos
/*
const toDos = [
{
    id:1,
    text: 'take out the trashes',
    isCompleted: true,
},
{
    id:2,
    text: 'Meet the Boss',
    isCompleted: true,
},
{
    id:3,
    text: 'Dentist Appointment',
    isCompleted: false,
}
];
console.log(toDos[1].text+' is not done as this is '+ toDos[1].isCompleted);

const todoJSON = JSON.stringify(toDos);
console.log(todoJSON);
*/


//For loops , while also works the same as 
/*for( let i =0;i<3;i++){
    console.log(`for loop number ${i}`);
}*/

// using the for loop on our array that we created earlier
/*
for(let i = 0; i < toDos.length ; i++){
    console.log(toDos[i].text)
}

for(let todo of toDos){
    console.log(todo.text);
}*/



//ForEach, Map, filter
/*
//foreach
// careful with the syntax 
toDos.forEach(function(todo){
    console.log(todo.text);

});

*/

// map -> returns an array (basically it does some operation on an array and then returns one on the loop)
/*
const todoText = toDos.map(function(todo){
    return todo.text;
}) 

console.log(todoText);*/
//filter
// for example we only want to return the tasks that are completed
/*const toDocompleted = toDos.filter(function(todo){
    return todo.isCompleted === true;
})

console.log(toDocompleted);*/

// this filter chains on other ones, like map
/*
const toDocompleted = toDos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(toDocompleted);

*/