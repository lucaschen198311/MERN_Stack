****************************************************************************************
--Class video：
https://www.youtube.com/channel/UCCBf2vuTbk8sD5tiAPwKEkQ

--React:
https://reactjs.org/

--Getting started Webpack
https://webpack.js.org/guides/getting-started/

--Introducing JSX
https://reactjs.org/docs/introducing-jsx.html

--React DOM:
https://reactjs.org/docs/dom-elements.html

--Function and Class Components (React)
https://reactjs.org/docs/components-and-props.html#function-and-class-components

--SyntheticEvent(React)
https://reactjs.org/docs/events.html#supported-events

--Handling Events
https://reactjs.org/docs/handling-events.html

--Introducing Hooks
https://reactjs.org/docs/hooks-intro.html

--Uncontrolled Components
https://reactjs.org/docs/uncontrolled-components.html

--Lists and Keys(React)
https://reactjs.org/docs/lists-and-keys.html

--Lifting State(React)
https://reactjs.org/docs/lifting-state-up.html

--CSS in JS:
https://styled-components.com/
https://github.com/styletron/styletron
https://emotion.sh/docs/introduction
https://www.styletron.org/react#props-filtering

--Context API


--Render Props
https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns

--Promise
https://web.dev/promises/

--useEffect(A common way useEffect is used is when making a call to an API.)
https://reactjs.org/docs/hooks-effect.html


--Axios:
https://github.com/axios/axios

--Postman
https://www.postman.com/downloads/

--MongoDB(operator):
https://docs.mongodb.com/manual/reference/operator/

--Mongoose SchemaTypes
https://mongoosejs.com/docs/schematypes.html


*****************************************************************************************


-----------------------------------------React-------------------------------------------

/*************************************Using React********************************/

--Add CDN in script and put end of body html:
<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 

const myReactComponent = React.createElement("h1", {}, "I am creating my first React component");
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"));

----Example:

<script>
    const App = React.createElement("h1", {}, "Our First React page has rendered");
    ReactDOM.render(App, document.getElementById("root"));
</script>

/*************************************Using React********************************/

/*************************************JSX********************************/

ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));

const App = () => <h1>Our First React page has rendered</h1>;
ReactDOM.render(<App></App>, document.getElementById("root"));

<script type="text/babel">
    ReactDOM.render(<App />, document.getElementById('root'));
</script>


/*************************************JSX********************************/


/*************************************Create React App********************************/

--setup
npx create-react-app your-project-name-here
cd project_folder
npm start 

----Example:
--include <div></div> or <></> if you don't want to add div:

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>        
        </>
    );
}

--pay attention of class=>className/ for=>htmlFor in JSX

function App() {
    return (
        <form action="/process" method="post">                
            <div className="form-group">                    
                <label htmlFor="email">Email:</label>                    
                <input type="text" id="email" name="username" className="form-control" />                
            <div>            
        </form>        
    );
}

/*************************************Create React App********************************/


/*************************************Functional Components********************************/

----Example(Basic):

import React from 'react';
const PersonCard = (props) => {
    return(
        <div>
            <h1><font color="#ffffff">Instructor Bob</font></h1>
            <p>Age: 32</p>
            <p>Hair Color: purple</p>
        </div>
    );
}
export default PersonCard;

----Example(pros):

--/src/App.js:

import React from 'react';
import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header firstName={ "Bill" } lastName={ "Justice" } /> //except strings, all datatypes need {}. It is recommendated to use {} always.
    </div>
  );
}
export default App;

--/src/components/Header.js

import React from 'react';
    
const Header = (props) => {
    const { firstName, lastName } = props; 
    return (
        <div>
            <h1>
    		// Destructuring allows us to use them like simple variables
                My name is { firstName } { lastName }
            </h1>
        </div>
    );
}
export default Header;

----Example(Synthetic Events):

//(1) onClick - an event that runs when button / link is clicked.
//(2) onChange - an event that runs when a form input is changed.
//(3) onSubmit - an event that runs when a form is submitted.
//(4) onFocus - an event that is run when an element is given focus (clicked on or tabbed to).
//(5) onBlur - an event that is run when an element loses focus (the user moves away from the element).

import React from 'react';
import logo from './logo.svg';
import './App.css';
    
    
function App() {
    return (
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    );
}
    
export default App;


----Example(Hooks):

import React, { useState } from 'react';
    
const Counter = props => {
    const [state, setState] = useState({ //getter and setter: Setters Are Asynchronous Functions!
        clickCount: 0
    });
 
    const handleClick = () => {
        setState({                   // the setter will update the value held in state
            clickCount: state.clickCount + 1
        });
    }
 
    return (
        <div>
            { state.clickCount }      // displaying the current value held in our state object
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;

--or:

import React, { useState } from 'react';
    
const Counter = props => {
    const [count, setCount] = useState(0);   // use descriptive names for your destructured variables
 
    const handleClick = () => {
        setCount(count + 1);
    }
 
    return (
        <div>
            { count }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;


----Example(form):

import react, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: <label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;


----Example(Form Conditional Rendering/handling validation)

import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
    
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };
    
    return (
        <form onsubmit={ createUser }>
            {
				hasBeenSubmitted ? 
				<h3>Thank you for submitting the form!</h3> :
				<h3>Welcome, please submit the form.</h3> 
			}
            <div>
                <label>Username: <label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;


--error handling(partial code snippet and can be expanded):

const MovieForm = ( ) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    
    handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setTitleError("");
        }
    }
    
    {/* this functionality can be repeated for each input needing validation */}
    
    return (
        <form onsubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />
                {
                    titleError ?
                    <p>{ titleError }</p> :
                    ''
                }
            </div>
            {
                titleError ?
                <input type="submit" value="Create Movie" disabled /> : 
                <input type="submit" value="Create Movie" />
            }
        </form>
    );
}


----Example(useReducer):

import React, { useReducer } from 'react';
 
const initialState = {
    name: '',
    email: ''
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}


----Example(Children):

import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
    
function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;

--MyNewComponent:

import React from 'react';
    
const MyNewComponent = (props) => {
    return(
        <div>
            { props.children }
            <h1>
                { props.header }
            </h1>
        </div>
    );
}
    
export default MyNewComponent;


----Example(Styles/CSS Modules):

// MyButtonComponent.js
import React, { Component } from 'react';
import styles from './MyButtonComponent.module.css';
 
const MyButton = (props) => {
    return (
        <button className="btn">{ props.children }</button>
    );
}
    
export default MyButton;


----Example(map):

import React from 'react';
    
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>
        {
            groceryList.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )
        }
        </ul>
    ); 
}
    
export default Groceries;


----Example(lifting state):

--MessageForm

import React, { useState } from 'react';
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // what should we do with the message?
		props.onNewMessage( msg );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;

--MessageDisplay

import React, { useState } from 'react';
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </>
    );
};
    
export default MessageDisplay;

--App

import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
    
function App() {
    
	const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const youveGotMail = (newMessage) => {
        setCurrentMsg(newMessage);
    }
    
    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={currentMsg} />
        </>
    );
}
    
export default App;


----Example(CSS in JS):

npm install styled-components

--src/components/StyledBox.js

import React from 'react';
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;
 
export default StyledBox;

--src/components/SomeOtherComponent.js

import React from 'react';
import StyledBox from './StyledBox';
 
const SomeOtherComponent = () => (
    <div>
        <StyledBox bgColor="blue"/>
        <StyledBox bgColor="red" height="200px"/>
    </div>
)
 
export default SomeOtherComponent;


----Example(Styletron, styling-specific props must be preceded with the dollar sign):

npm install styletron-react

--src/App.js

import React from 'react';
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
 
const engine = new Styletron();
 
function App() {
    return (
        <Provider value={engine}>
            {/* your other components go in here */}
        </Provider>
    )
}
 
export default App;

--src/components/StyledBox.js

import React from 'react'; 
import { styled } from 'styletron-react';
 
const StyledBox = styled('div', props => ({
    border: '1px solid lightgray',
    background: props.$bgColor,
    width: props.$width || '100px',
    height: props.$height || '100px',
 
    display: 'none',
 
    ['@media and (min-width: ' + (props.$minWidth || '500px') + ')']: {
        display: 'block'
    }
}));
 
export default StyledBox;

--src/components/SomeOtherComponent.js

import React from 'react';
import StyledBox from './StyledBox';
 
const SomeOtherComponent = () => (
    <div>
        <StyledBox $bgColor="blue"/>
        <StyledBox $bgColor="red" $height="200px" $minWidth="1200"/>
    </div>
)
 
export default SomeOtherComponent;


----Example(Context - "Global state"):

import { createContext } from 'react';
...
const MyContext = createContext();

--

import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppWrapperComponent from './AppWrapperComponent';
import MyContext from './context/MyContext';
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"context value"}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </MyContext.Provider>
    </div>
  );
}
export default App;

--

import React, { useContext } from 'react';
import MyContext from './context/MyContext';
const GreatGreatGreatGrandchildComponent = (props) =>{
    const context = useContext(MyContext);
    return(
      <div>
        hello {context}
      </div>
    )
}
export default GreatGreatGreatGrandchildComponent;


----Example(Context with State):

import React from 'react';
import logo from './logo.svg';
import './App.css';
 
import AppWrapperComponent from './AppWrapperComponent';
import NumContext from './context/NumContext';
 
function App() {
  const [val, setVal] = useState(1);
 
  return (
    <div className="App">
      <NumContext.Provider value={{val, setVal}}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </NumContext.Provider>
    </div>
  );
}
 
export default App;

----Example(Render Props):

// Counter.js
import React, { useState } from 'react';
// notice how instead of having props as a parameter, we are directly deconstructing
//    the props object in the parameters.  This is a common approach, but less readable
//    for new developers
export default ({ render, initialValue = 0 }) => {
    const [count, setCount] = useState(initialValue);
 
    function increment() {
        setCount(count + 1);
    }
 
    function decrement() {
        setCount(count - 1);
    }
 
    return render({ count, increment, decrement });
}

// FirstCounter.js
import React from 'react';
 
import Counter from './Counter';
 
export default () => (
    <Counter
        render={({ count, increment }) => (
            <>
                <h2>The count is currently {count}!</h2>
                <button onClick={increment}>Add One</button>
            </>
        )}
        initialValue={5}
    />
)


// SecondCounter.js
import React from 'react';
 
import Counter from './Counter';
 
export default () => (
    <Counter
        render={({ count, increment, decrement }) => (
            <>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>Current Count: {count}</p>
            </>
        )}
        initialValue={10}
    />
)


----Example(Custom Hooks):

// useList.js
import { useState } from 'react';
 
export default (initialList = []) => {
    const [list, setList] = useState(initialList);
 
    function add(str) {
        setList([...list, str]);
    }
 
    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }
 
    return {
        list,
        add,
        remove
    };
}

import React, { useState } from 'react';
import useList from './useList';
 
export default () => {
    const [val, setVal] = useState('');
    const { list, add } = useList(['first', 'second']);
 
    function handleSubmit() {
        add(val);
        setVal('');
    }
 
    return (
        <>
            {list.map((item, i) => <p key={i}>{item}</p>}
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
}    


/*************************************Functional Components********************************/


/*************************************React API********************************/

----Example(Promise):

const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
	

----Example(Consuming APIs):

fetch("http://www.example.com")
    .then(response =>{
        //do something
    }).catch(err => {
        console.log(err);
    })

--or:

let response = await fetch("http://www.example.com");

--

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id = "root"></div>
    <script>
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    </script>
</body>
</html>


----Example(useEffect ->usually used for API call):

const Example = (props) => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Example;

--Cleaning Up On Unmounting

// TimeDisplay.js
import React, { useEffect, useState } from 'react';
 
export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
 
        return function clearInt() {
            clearInterval(int);
        }
    }, []);
 
    return (
        <div>Current Time: {time}</div>
    );
}


----Example(Axios - 3rd party library for API call)

npm install axios

import React, { useEffect, useState } from 'react';
import axios from 'axios';
...
const someComponent = props => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
            {responseData}
        </div>
    )
}


/*************************************React API********************************/



/*************************************React Routing********************************/

--(1) npm install @reach/router  and add it to the project's dependencies list

--(2)Routing

import React from 'react';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
        <Router>
            <LoginComponent path="/login"/>
            <DashboardComponent path="/dashboard"/>
        </Router>
    </div>
  );
}
export default App;

--(3) Link 

import React from 'react';
import { Link } from '@reach/router';
const NavBar = (props) => {
  return (
      <div>
        <Link to = "/dashboard">Dashboard</Link>
        <Link to = "/login">Login</Link>
      </div>
  );
}

--Example:

import React from 'react';
import { Router } from '@reach/router';
import PagreOne from './components/PageOne';
import PagreTwo from './components/PageTwo';
function App() {
  return (
    <div className="App">
        <Router>
            <PageOne path="/page-one"/>
            <PageTwo path="/page-two"/>
        </Router>
    </div>
  );
}
export default App;

-----
import React from 'react';
import {Link, navigate} from '@reach/router';
const PageOne = props=>{
	const onClickHandler = (event)=>{
		event.preventDefault;
		navigate('/page-two');
	}
	return (
		<div>
			You are in page one. 
			<br/>
			<Link to = "/page-two">You are in page two.</Link>
			<button onClick = {onClickHandler}>Submit</button>
		</div>
	)
}
export default PageOne;

-----
import React from 'react';
import {Link, navigate} from '@reach/router';
const PageTwo = props=>{
	const onClickHandler = (event)=>{
		event.preventDefault;
		navigate('/page-one');
	}
	return (
		<div>
			<Link to = "/page-one">You are in page one.</Link>
			<br/>
			You are in page two. 
			<button onClick = {onClickHandler}>Submit</button>
		</div>
	)
}
export default PageTwo;


--(4)Routing with Parameters

import React from 'react';
import { Router } from '@reach/router';
function App(){
    return(
        <div className="App">
            <Router>
                <ListOfDogsComponent path="/dogs" />
                <DetailDogComponent path="/dogs/:id" />
            </Router>
        </div>
    )
}


/*************************************React Routing********************************/



-----------------------------------------Express-------------------------------------------

--HTTP Methods:

--(1) GET is used for passing insensitive information
--(2) POST is used for passing sensitive information.
--(3) PUT is used for passing updating whole sensitive information.
--(4) PATCH is used for passing updating pieces of sensitive information.
--(5) DELETE is used for passing deleting sensitive information.

--After download boiler plate of express
npm install

--HelloExpress/server.js

const express = require("express");
const app = express();
const port = 8000;copy

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {			//can be app.post/app.delete/app.put/app.patch...
res.json({ message: "Hello World" });

........

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

--Then run the server by opening your terminal, navigating to the directory housing your server.js file and visit localhost:8000/api :

node server.js


--Nodemon

npm install -g nodemon
nodemon server.js


-----Routing:

--Exapmle(GET Data):

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});


--Example(Post Data):

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


--Example（Route Parameters）：

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
});

--update data：

app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});

--delete data:

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


--Server Folder Structure：

server - will hold all server related files
		config - will handle the database configuration and connection
		controllers - will hold all logic for each model (i.e creating, updating, etc...)
		models - will hold all the schemas
		routes - will handle all of our routes for each model
		server.js - will handle all the server logic with express



--Example(import/export):

--import:

require("./filePathGoesHere")

const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);

--or

const { greet, add } require("./my_module");
greet();
add(5, 7);

--export:

module.exports.greet = function() {
  console.log("Hello! We are exporting a function called Greet.");
};
 
module.exports.add = function(num1, num2) {
  console.log("The sum is: ", num1 + num2);
};

module.exports = {
  greet: function() {
    console.log("Hello! We are exporting a function called Greet.");
  },
  add: function(num1, num2) {
    console.log("The sum is: ", num1 + num2);
  }
}



----------------------------------------- Mongo DB -------------------------------------------

cd C:\Program Files\MongoDB\Server\4.4\data\
mongo.exe

--basic commands:

show dbs //show all dbs
db //show current db
use DB_NAME //switch to another db or create new db if no one exits
db.dropDatabase() //delete db
show collections
db.createCollection("COLLECTION_NAME")
db.COLLECTION_NAME.drop()
db.COLLECTION_NAME.insert({YOUR_QUERY_DOCUMENT})
db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT}) //READ - Retrieving documents from a collection
db.COLLECTION_NAME.find({}) //find all documents of the given collection   
db.COLLECTION_NAME.find()	//find all documents of the given collection
db.COLLECTION_NAME.find().pretty() //make query result look good in format
db.COLLECTION_NAME.find({_id: ObjectId(".....")}) //find document by id
db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN) //BOOLEAN is optional with default false; The boolean is called the justOne boolean, and if it is present and it is true, the remove query will only remove the first document that matches the query. 
db.COLLECTION_NAME.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})  // Note: the options document is optional. update method will completely overwrite everything except the _id field.
--Example of update:
db.ninjas.update({name: "Trey"}, {$set: {location: "Mountain View"}}) // $set : update operator which will not overwrite the 1st param. 

--Example(operators):

db.dojos.find({number_of_students: {$gt: 15}})

$gt (greater than)	//Use to query selectively on numerical-valued fields
$gte (greater than or equal to)	//Use to query selectively on numerical-valued fields
$lt (less than)	//Use to query selectively on numerical-valued fields
$lte (less than or equal to)	//Use to query selectively on numerical-valued fields
$in (in array)	//Use to find documents who have a particular value within an array.

db.students.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'snowboarding'}})

$push	//Push to an array contained within a document.
$pop	//Removes either the first or last element from an array.
/*Ex:
db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
Use 1 for the last item in the array, -1 for the first item.
*/

$addToSet	//It functions just like $push.  However, $addToSet only adds to the specified array if the value doesn't already exist (thereby preventing duplicate entries).
$pull	//Removes a specified value from an array, unlike $pop which removes by location in the array.
/*Ex:
db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}})

This will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.
*/


-------Mongoose

//Download the HelloMongoose boilerplate code and open in vs-code
npm init -y
npm install mongoose express

//In any file that will use the Mongoose library, you will need to be sure to require it at the top of the file similar to this:
const mongoose = require('mongoose');

//navigate to the config folder where you will find the mongoose.config.js file where we use mongoose to connect to MongoDb
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
	
//Note: If you connect to a database that doesn't exist, Mongoose will create the DB for you as soon as you create your first document!


//navigate your way to the user.model.js file in the models folder where we create a User collection using mongoose
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;

//Navigate your way into the controllers folder where we will find the user.controller.js file that will house all of our logic for CURD:
const User = require('../models/user.model');
 
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allDaUsers => res.json({ users: allDaUsers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleUser => (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//Navigate your way into the routes folder where we will find the user.routes.js file that will be responsible for all of our routes dealing with the user model
const UserController = require('../controllers/user.controller');
 
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser); //Note:   Move specific routes to the top before ones with wildcard (like:id)
}


//Last but not least is our server.js file
const express = require("express");
const app = express();
    
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

//run script
nodemon server.js


-----Common Mongoose Commands

// Create a Schema for Users
const UserSchema = new mongoose.Schema({
 name: { type: String },
 age: { type: Number }
}, { timestamps: true })
// create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);

// ...retrieve an array of all documents in the User collection
User.find()
    .then(users => {
        // logic with users results
    })
    .catch(err => res.json(err));
	
// ...retrieve an array of documents matching the query object criteria
User.find({name:'Jessica'}) 
    .then(usersNamedJessica => {
        // logic with usersNamedJessica results
    })
    .catch(err => res.json(err));
	
// ...retrieve 1 document (the first record found) matching the query object criteria
User.findOne({_id: '5d34d361db64c9267ed91f73'})
    .then(user => {
        // logic with single user object result
    })
    .catch(err => res.json(err));
	
 // ...create a new document to store in the User collection and save it to the DB.
const bob = new User(req.body);
// req.body is an object containing all the users data.
// if we look at req.body as an object literal it would look like this
	/*
     * req.body = {
     *		"name": "Bob Ross",
     *		"age": 42
     *	}
    **/
bob.save()
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.
 
 
--or:

// ...create a new document to store in the User collection and save it to the DB.
const { userData } = req.body;
User.create(userData)
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.
 
 
// ...delete all documents of the User collection
User.remove()
    .then(deletedUsers => {
        // logic (if any) with successfully removed deletedUsers object
    })
    .catch(err => res.json(err));
	
// ...delete 1 document that matches the query object criteria
User.remove({_id: '5d34d361db64c9267ed91f73'})
    .then(deletedUser => {
        // logic (if any) with successfully removed deletedUser object
    })
    .catch(err => res.json(err));
	

User.updateOne({name:'Bob Ross'}, {
    name: 'Ross Bob',
    $push: {pets: {name: 'Sprinkles', type: 'Chubby Unicorn' }}
})
    .then(result => {
        // logic with result -- note this will be the original object by default!
    })
    .catch(err => res.json(err));
	
User.findOne({name: 'Bob Ross'})
    .then(user => {
        user.name = 'Rob Boss';
        user.pets.push({name: 'Sprinkles', type: 'Chubby Unicorn'});
        return user.save();
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));
	
User.exists({name: req.body.name})
    .then(userExists => {
        if (userExists) {
            // Promise.reject() will activate the .catch() below.
            return Promise.reject('Error Message Goes Here');
        }
        return User.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));
	


-----Validation:

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      minlength: [6, "First name must be at least 6 characters long"]
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      maxlength: [20, "Last name must be at least 6 characters long"]
    },
    age: {
      type: Number,
      min: [1, "You must be at least 1 or older to register"],
      max: [150, "You must be at most 149 years old to register"]
    },
    email: { type: String, required: [true, "Email is required"] }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;




----------------------------------------- Mongo DB -------------------------------------------

