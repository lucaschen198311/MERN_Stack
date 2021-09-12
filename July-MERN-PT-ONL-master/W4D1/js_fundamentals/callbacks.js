/*
========== CALLBACK FUNCTIONS ==========

A callback function is, simply put, a function provided as an argument
to another function
*/

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "exale.txt");

// fs.readFile reads a file and makes text in file available for use to access
// (error, data) => {} is the callback function provided as an argument to the fs.readFile
// function
fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.log("INSIDE ERROR CASE");
    console.log(error);
  } else {
    console.log(data);
  }
});

// this function takes in 3 args:
// x, y, and a callback function
const addXY = (x, y, callback) => {
  const n = x + y;
  // we call the callback function as arg with result of x + y
  callback(n);
};

// "callback hell"
// call addXY with 2 and 2, and the callback function.

addXY(2, 2, (n1) => {
  console.log("n1 is", n1);
  addXY(n1, 2, (n2) => {
    console.log("n2 is", n2);
    addXY(n2, 2, (n3) => {
      console.log("n3 is", n3);
    });
  });
});

// very very basic promise
const firstPromise = new Promise((resolve, reject) => {
  if (2 === 1) {
    console.log("inside success case");
    resolve("SUCCESS!");
  } else {
    console.log("inside reject case");
    reject("FAILURE!");
  }
});

firstPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Turning above callback function into a promise
const addXYPromise = (x, y) => {
  return new Promise((resolve, reject) => {
    resolve(x + y);
  });
};

// calling promises
addXYPromise(2, 2)
  // .then() block is for the success case, or what is resolved in promise
  .then((result1) =>
    addXYPromise(result1, 2).then((result2) =>
      addXYPromise(result2, 2).then((result3) =>
        console.log("end of the line:", result3)
      )
    )
  )
  // .catch() block is for the error case, or what is rejected in prmise
  .catch((err) => console.log(err));
