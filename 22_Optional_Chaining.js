// Optional Chaining :
// Optional chaining is a feature in JavaScript that allows you to safely access 
// deeply nested object properties without having to check if each level of the 
// property exists.
// if any part of chain is "null" or "undefined", it stops and returns undefined 
// instead of throwing error.

const user = {
    name: "Venkatesh",
    address: {
      city: "Pune"
    }
  };

  console.log(user.address.city);
  console.log(user.contact?.state)


//   Why it's useful:
// Prevents runtime errors when accessing nested properties
// Makes code cleaner, shorter and safer.

