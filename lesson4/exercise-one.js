// Create an array, with at least 5 strings
let alternativeMilk = ["almond", "oat", "coconut", "pistachio", "soy"];
console.log(alternativeMilk);

// Add an element to the end of the end of the array
alternativeMilk.push("cashew");
console.log(alternativeMilk);

// Remove the third element
alternativeMilk.splice(2, 1);
console.log(alternativeMilk);

// Create a string from the elements and comma separate them
let milkString = alternativeMilk.join('","');
console.log(milkString);
