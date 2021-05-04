// Import all the functions from the files
import { choice, remove } from "./helpers";
import fruits from "./foods";

// Randomly draw fruit
const fruit = choice(fruits);

// Log out the results of picking a random fruit
console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

// // Remove selected fruit from array
const remainingFruits = remove(fruit, fruits);

// // Log out the number of remaining fruits
console.log(`I'm sorry, we're all out. We have ${remainingFruits.length} left`);