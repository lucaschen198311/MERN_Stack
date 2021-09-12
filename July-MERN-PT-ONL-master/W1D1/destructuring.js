// ========== OBJECTS AND DESTRUCTURING ==========

// This is a javascript object, which is a collection of key/value pairs
const dojo = {
  dojoName: "Coding Dojo",
  location: "New York",
  nMembers: 45,
  stacksTaught: ["MERN", "Java", "Django"],
  students: [
    {
      firstName: "Joe",
      lastName: "Smith",
    },
    {
      firstName: "Matilda",
      lastName: "Jones",
    },
  ],
};

// We can log out the values associated with keys like this
console.log(dojo.dojoName);
console.log(dojo.location);

// But instead of getting access to values like is shown above, we can "destructure"
// an object and pull off the key val pairs like this...
const { dojoName, location } = dojo;
console.log(dojoName, location);

// change variable name during destructuring
const { nMembers: numberOfMembers } = dojo;
console.log(numberOfMembers);

// ===== SPREAD OPERATOR =====
// Below will pull off key/val pairs for location, dojoName, stackTaught,
// and will assign the rest of the dojo object to remainingItems using the
// "..." --> this is called the spread operator
const { location, dojoName, stacksTaught, ...remainingItems } = dojo;
console.log(remainingItems);

// ========== ARRAYS AND DESTRUCTURING ==========

// Arrays are ordered items, starting at index 0
const items = ["pen", "pencil", "paperclip", "shirt", "desk"];
// We can get access to the value in the array at an index using []
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

// We can destructure arrays, assigning values by index
const [first, second, third] = items;
console.log(first);
console.log(second);
console.log(third);

// If we only need to destructure the fourth item from an array,
// we can use commas as placeholders for the order of items in the array
const [, , , shirt] = items;
console.log(shirt);

// We can use the spread operator when destructuring arrays
// whatsleft will take all the remaining indexes after index 1
const [first, second, ...whatsleft] = items;
console.log(first, second, third);
console.log(whatsleft);

// ===== Nested destructuring =====
// This pulls off the objects from inside the students array
const {
  students: [joeFirst, matildaSecond],
} = dojo;

// pulls off key joeFirst from students array
const { firstName } = joeFirst;
console.log(firstName);
