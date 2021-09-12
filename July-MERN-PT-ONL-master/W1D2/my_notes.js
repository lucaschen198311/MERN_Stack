/*
========== DOM manipulation ==========

m = document.querySelector(".module_content")

m.innerText = "This is DOM manipulation"



========== React Overview ==========

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <h1>First React page rendering...</h1>
    </div>
    <script
      crossorigin=""
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin=""
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script>
      const component = React.createElement("h2", {}, "First React component");
      ReactDOM.render(component, document.getElementById("root"));
    </script>
  </body>
</html>



*** This is using JUST THE REACT LIBRARY. We will not use React.createElement AT ALL in this course, 
so please don't concern yourself with learning this syntax.
I just wanted to show you guys enough to understand what does on under the hood. 


And this leads to an incredibly important and popular open source package called BABEL.

Babel will take what is called JSX (We will see what JSX is in just a few moments) and will convert
it to the React.createElement syntax you see here. This is javaxcript the browser can understand.


========= Manipulating JSX ==========

Let's take a look at this App.js file. 
*** Every React Component has to return SOMETHING. That SOMETHING is JSX. ***
First let's go over the basic of returning JSX from a React Component.

1. If the component only returns A SINGLE LINE of JSX, then you do not have to wrap 
your JSX in ()'s.
2. If your JSX is MORE THAN A SINGLE LINE, it must be wrapped in ()'s
3. Watch What happens when I try to return two elements that do not have a parent tag.
... Look at error
So if your JSX has more than 1 element, it MUST be wrapped in an enclosing tag. Can use a <div> 
or just use two empty open and close HTML elements <></>


Putting a variable into JSX
Putting a console.log function into JSX
Putting a variable that returns more JSX into JSX
Putting a function that takes in an argument and returns JSX
*** implicit returns

const myName = "Alberta";
const logThis = () => console.log("Logging something");
const someExtraJSX = (
  <>
    <h1>Hello there</h1>
    <h3>Booyakasha</h3>
  </>
);
const isEven = (n) => {
  if (n % 2 === 0) {
    return <h1>Even</h1>;
  } else {
    return <h1>Odd</h1>;
  }
};



========= Functional Components ===========
*** components must be Uppercase ***
html elements are lowercase, React components need to be uppercase

... turn code written in App.js into its own components

*** A functional component is what it sounds like - a javascript function that return JSX




========== PROPS ===========

props are piece of information that child components need


*********** USING PROPS DIRECTLY **************

function App() {
  // const logThis = () => console.log("Logging This!");

  return (
    <div className="App">
      <Name name={"Josh"} age={30} />
    </div>
  );
}

import "../App.css";

const Name = (props) => {
  const logThis = () => console.log("Logging something");
  const someExtraJSX = (
    <>
      <h1>Hello there</h1>
      <h3>Booyakasha</h3>
    </>
  );
  const isEven = (n) => {
    if (n % 2 === 0) {
      return <h1>Even</h1>;
    } else {
      return <h1>Odd</h1>;
    }
  };
  const h1Style = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <>
      <h1 className="my-heading">
        Yo my name is {props.name} and I am {props.age} Years old
      </h1>
      {logThis()}
      {someExtraJSX}
      {isEven(2)}
    </>
  );
};

export default Name;



************** DESTRUCTURING PROPS *******************

import "../App.css";

const Name = (props) => {
  const { name, age } = props;
  const logThis = () => console.log("Logging something");
  const someExtraJSX = (
    <>
      <h1>Hello there</h1>
      <h3>Booyakasha</h3>
    </>
  );
  const isEven = (n) => {
    if (n % 2 === 0) {
      return <h1>Even</h1>;
    } else {
      return <h1>Odd</h1>;
    }
  };
  const h1Style = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <>
      <h1 className="my-heading">
        Yo my name is {name} and I am {age} Years old
      </h1>
      {logThis()}
      {someExtraJSX}
      {isEven(2)}
    </>
  );
};

export default Name;



*/
