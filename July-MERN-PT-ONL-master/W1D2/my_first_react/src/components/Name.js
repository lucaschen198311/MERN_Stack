import "../App.css";
const Name = (props) => {
  // Destructuring props to pull off the variables we need for the component
  const { name, age } = props;
  // A function we will call inside JSX
  const logThis = () => console.log("I'm logging something!");
  // A variable containing JSX that we will add to our return statement
  const someMoreJSX = (
    <>
      <h1>Hello there</h1>
      <h2>Booyakasha</h2>
    </>
  );
  // One line JSX - remember if there's ONLY 1 element being returned from JSX
  // we do not have to use ()'s
  const oneLineJSX = <h1>Im only one line</h1>;
  // A function that accepts an argument and returns JSX depending on argument
  const isEven = (n) => {
    if (n % 2 === 0) {
      return <h1>{n} is Even</h1>;
    } else {
      return <h1>{n} is Odd</h1>;
    }
  };

  const myH1Style = { color: "red", fontSize: "50px" };

  // THIS IS JSX!!!!
  return (
    <>
      <h1 id="myH1Style">
        Hello, my name is {name} and my age is {age}
      </h1>
      {/* 
        Remember, that ANY javascript logic we want to insert into JSX, 
        we have to use {}'s
      
      */}
      {logThis()}
      {someMoreJSX}
      {oneLineJSX}
      {isEven(6)}
    </>
  );
};

export default Name;
