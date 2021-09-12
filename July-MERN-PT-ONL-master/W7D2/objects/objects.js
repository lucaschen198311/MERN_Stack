function example() {
  this.name = "Blah";
  this.that = 5;
  this.sayYes = function () {
    console.log("YES");
  };
}

const exFn = new example();
exFn.sayYes();

// console.log(Array.prototype);
