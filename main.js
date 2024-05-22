Question: 1;
//Create an array named fruits that contains the following string 
//elements: "apple", "banana", "mango", "orange".
console.log("\n \t \t Answer number 1 \n");
var fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
Question: 2;
//Declare an array named numbers that can contain only number 
//elements and initialize it with the values 10, 20, 30, and 40.
console.log("\n \t \t Answer number 2 \n");
var number1 = [10, 20, 30, 40];
console.log(number1);
Question: 3;
//Access the third element of the fruits array and assign it to a 
//variable named thirdFruit. 
console.log("\n \t \t Answer number 3 \n");
var thirdFruit = ["Apple", "Strawberry", "Banana", "Blueberry"];
console.log(thirdFruit[2]);
Question: 4;
//Change the second element of the numbers array to 25. 
console.log("\n \t \t Answer number 4 \n");
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
Question: 5;
//Add the element "grape" to the end of the fruits array using the 
//method.
console.log("\n \t \t Answer number 5 \n");
var fruits_name = ["Pinaple", "Gave", "Cherry", "Blackberry"];
fruits_name.push("Grape");
console.log(fruits_name);
Question: 6;
//Remove the last element from the fruits array using the 
//method and assign it to a variable named lastFruit.
console.log("\n \t \t Answer number 6 \n");
var new_fruits = ["Banana", "Mango", "Apple", "Blackberry"];
var lastFruit = new_fruits.pop();
console.log(lastFruit, new_fruits);
Question: 7;
//Remove the first element from the fruits array using the 
//method and assign it to a variable named firstFruit.
console.log("\n \t \t Answer number 7 \n");
var fruits_lest = ["Banana", "Mango", "Pinaple", "Gave", "Cherry"];
var firstFruit = fruits_lest.shift();
console.log(fruits_lest, firstFruit);
Question: 8;
//Add the element "kiwi" to the beginning of the fruits array 
//using the method.
console.log("\n \t \t Answer number 8 \n");
var fruits00 = ["Blueberry", "Pinaple", "Graps"];
fruits00.unshift("Kiwi");
console.log(fruits00);
Question: 9;
//Remove 2 elements from the fruits array starting from index 1 
//using the method.
console.log("\n \t \t Answer number 9 \n");
var fruits0 = ["Blueberry", "Pinaple", "Graps", "Banana"];
fruits0.shift();
fruits0.shift();
//fruits0.splice(1,2);
console.log(fruits0);
Question: 10;
//Insert the elements "pineapple" and "pear" at index 2 of the 
//fruits array using the method.
console.log("\n \t \t Answer number 10 \n");
var fruits01 = ["Blackberry", "Graps", "Pinaple",];
fruits01.unshift("PINEAPLE", "PEAR");
console.log(fruits01);
Question: 11;
//Create a new array named citrusFruits that contains the first 
//two elements of the fruits array using the method.
console.log("\n \t \t Answer number 11 \n");
var fruits_list1 = ["Pear", "Graps", "Pinaple"];
var citrusFruits = fruits_list1.slice(0, 2);
console.log(citrusFruits);
Question: 12;
//Create a new array named lastTwoFruits that contains the last 
//two elements of the fruits array using the  method.
console.log("\n \t \t Answer number 12 \n");
var fruitList3 = ["Apple", "Pear", "Gava", "Graps", "Mango"];
var lastTwofruits = fruitList3.slice(-2);
console.log(lastTwofruits);
