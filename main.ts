Question:1
//Create an array named fruits that contains the following string 
//elements: "apple", "banana", "mango", "orange".
console.log("\n \t \t Answer number 1 \n");

let fruits: string[] =["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

Question:2
//Declare an array named numbers that can contain only number 
//elements and initialize it with the values 10, 20, 30, and 40.
console.log("\n \t \t Answer number 2 \n");

let number1: number[] =[10,20,30,40];
console.log(number1);

Question:3
//Access the third element of the fruits array and assign it to a 
//variable named thirdFruit. 
console.log("\n \t \t Answer number 3 \n");

let thirdFruit: string[] =["Apple", "Strawberry", "Banana", "Blueberry"];
console.log(thirdFruit[2]);

Question:4
//Change the second element of the numbers array to 25. 
console.log("\n \t \t Answer number 4 \n");

let number: number[] = [10, 20, 30, 40];
number[1]= 25;
console.log(number);

Question:5
//Add the element "grape" to the end of the fruits array using the 
//method.
console.log("\n \t \t Answer number 5 \n");

let fruits_name: string[] =["Pinaple", "Gave", "Cherry", "Blackberry"];
fruits_name.push("Grape");
console.log(fruits_name);

Question:6
//Remove the last element from the fruits array using the 
//method and assign it to a variable named lastFruit.

console.log("\n \t \t Answer number 6 \n");

let new_fruits: string[] =["Banana", "Mango", "Apple", "Blackberry"];
let lastFruit= new_fruits.pop();
console.log(lastFruit,new_fruits);

Question:7
//Remove the first element from the fruits array using the 
//method and assign it to a variable named firstFruit.

console.log("\n \t \t Answer number 7 \n");

let fruits_lest: string[] =["Banana", "Mango", "Pinaple", "Gave", "Cherry"];
let firstFruit= fruits_lest.shift();
console.log(fruits_lest,firstFruit);

Question:8
//Add the element "kiwi" to the beginning of the fruits array 
//using the method.
console.log("\n \t \t Answer number 8 \n");

let fruits00: string[] =["Blueberry", "Pinaple", "Graps"];
fruits00.unshift("Kiwi");
console.log(fruits00);

Question:9
//Remove 2 elements from the fruits array starting from index 1 
//using the method.
console.log("\n \t \t Answer number 9 \n");

let fruits0: string[]=["Blueberry","Pinaple","Graps","Banana"];
fruits0.shift();
fruits0.shift();
//fruits0.splice(1,2);
console.log(fruits0);

Question:10
//Insert the elements "pineapple" and "pear" at index 2 of the 
//fruits array using the method.
console.log("\n \t \t Answer number 10 \n");

let fruits01: string[]=["Blackberry", "Graps", "Pinaple",];
fruits01.unshift("PINEAPLE", "PEAR");
console.log(fruits01)

Question:11
//Create a new array named citrusFruits that contains the first 
//two elements of the fruits array using the method.
console.log("\n \t \t Answer number 11 \n");

let fruits_list1: string[]=["Pear","Graps","Pinaple"];
let citrusFruits: string[] = fruits_list1.slice(0,2);
console.log(citrusFruits)


Question:12
//Create a new array named lastTwoFruits that contains the last 
//two elements of the fruits array using the  method.
console.log("\n \t \t Answer number 12 \n");

let fruitList3: string[]= ["Apple","Pear","Gava","Graps","Mango"];
let lastTwofruits:  String[]= fruitList3.slice(-2);
console.log(lastTwofruits);