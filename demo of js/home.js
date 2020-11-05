console.log('hello');

alert('hello this is manvi');

document.write("Hey....");


//-----Variable-----
var b='smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

document.getElementById('someTxt').innerHTML='Hey There';

var age=prompt('What is your age?');

document.getElementById('someTxt').innerHTML=age;


//-----Numbers in javascript-----
console.log(50 / 5);

var num1=10;

//---Increment num1---
//num1=num1+1;
num1++;

//---Decrement num1---
num1--;
console.log(num1);

//---Divide, multiply, remainder---
console.log(num1 % 5);
console.log(num1 % 6);

console.log(num1 / 6);

console.log(num1 * 10);

//---Increment by 10---
var num = 10;
num += 10;
console.log(num);


//-----Functions-----

//---Create a fuctn---
function fun() {
	alert('this is function.....');
}

//---Call a fuctn----
fun();

/* 
let's create a function that take in a name and says hello followed by your name

for example

Name:"Manvi"
Return:"Hello Manvi"
*/
function greeting(){
	var name=prompt('What is your name?');
	var result='Hello'+' '+name;   //string concatenation
	console.log(result);
	//document.getElementById('someTxt').innerHTML='Hello'+' '+name;
}
greeting();

//---above code use like this too---
function Greeting(yourName){
	var result='Hello'+' '+yourName;   //string concatenation
	console.log(result);
}
var name=prompt('What is your name?');
Greeting(name);

//How do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num2, num3){
	var result=num2+num3;
	console.log(result);
	//console.log(num2+num3);
}
sumNumbers(20,30);


//-----loop-----
//---while loop---
var num=0;
while (num < 10){
	num += 1;
	console.log(num);
}

//---for loop---
// let USE INSTEAD OF var
for(let num = 0;num <= 10;num++){
	console.log(num);
}   


//-----data types-----
let yourAge = 18;                                     //number
let urName = 'Bob';                                 //string
let Name = {first: 'James',last: 'Willam'};           //object
let truth = false;                                    //boolean
let groceries = ['apple','banana','orange','mango'];  //array
let random;                                           //undefined
let nothing = null;                                   //value null


//-----strings in JS (common methods)-----
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';
console.log(moreFruits);                            //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban',123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[3]);
console.log(fruit.split(','));          // split by a comma
console.log(fruit.split(''));           // split by a characters


//-----Array-----
let fruits = ['mango','orange','grapes','apple'];
fruits = new Array('mango','orange','grapes','apple');

console.log(fruits[2]); //access value at index

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

//---array common methods---
console.log('to string',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(),fruits); //remove last item
console.log(fruits.push('blackberry'),fruits);  //append

fruits[4] = 'strawberry'; //same as push
   //  | 
// place of this [4] we use [fruits.length]
console.log(fruits)

fruits.shift();  //remove first element from a list
console.log(fruits)

fruits.unshift('kiwi');  //add first element to a list
console.log(fruits)

let vegetables = ['potato','tomato','broccali'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());

let someNumbers = [5,10,15,2,48,85,4,12,225,2,5,1.8,1,500];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a,b){return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sorted in decending order

let emptyArray = new Array();
for(let num = 0; num < 10; num++){
	emptyArray.push(num);
}
console.log(emptyArray);


//-----Objects in JS(same like dictionaries in python)-----
let student = {
	first: 'Manvi',
	last: 'Rajawat',
	age: 25,
	height:170,
	studentInfo: function(){
	return this.first + '\n' +this.last;
    }
};

console.log(student.first);
console.log(student);
student.first = 'notManvi';  //chng value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


//-----Conditionals, Control flows(if else)-----
// 18-35 is my target demographic
// && AND
// || OR
var age1 = prompt('What is your age?');
//var age1 = 45;                          //use for below switch case
if( (age1 >= 18) && (age1 <= 35) ){
	status = 'target demo';
	console.log(status);
}
else{
	status = 'not my audience';
	console.log(status);
}

//---switch statement---
// differentiate b/w weekday vs. weekend
// day 0-->Sunday-->weekend
// day 1-->Monday-->weeday
// day 2-->Tuesday-->weeday
// day 3-->Wednesday-->weeday
// day 4-->Thursday-->weeday
// day 5-->Friday-->weekend
// day 6-->Saturday-->weekend
switch(6)
{
	case 0:
	     text = 'weekend';
	     break;
	case 5:
	     text = 'weekend';
	     break;
	case 6:
	     text = 'weekend';
         break;
    default:
	     text = 'weeday';
}
console.log(text);