import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // the skill state variable will be the state variable holding the CURRENT skill the user
  // is typing into the <input>. setSkill is the function we will use to set this variable
  const [skill, setSkill] = useState("");
  // the skillArr variable is the variable that will hold all skills the user adds via the form.
  // setSkillArr is the function to set this variable
  const [skillArr, setSkillArr] = useState([]);

  // This function is called on EACH form submission, or when the button inside the form is clicked
  const handleSubmitForm = (e) => {
    // prevent default form behavior which is to refresh the page. If we don't have this line,
    // the page will refresh immediately upon submission. Refreshing page --> state will be CLEARED/RESET
    e.preventDefault();
    // This is how we could validate form inputs upon submission, but would do something besides return
    if (e.target.value.length < 3) {
      console.log("less than 3");
      return;
    }

    // This calls the function to set the skillArr state variable.
    // ...skillArr uses the spread operator (...) to create a shallow copy of skillArr and insert it into
    // the newly updated state variable. Then we insert the new skill the user has entered into the input
    // to the new skillArr variable
    setSkillArr([...skillArr, skill]);
    // After adding the new skill to skillArr, we want to set our skill var to an empty string so that
    // the <input value> will appear empty after submitting the skill
    setSkill("");
  };
  return (
    <div className="App">
      <h3>{JSON.stringify(skillArr)}</h3>
      {/* <form onSubmit> is the synthetic event to respond to user submitting a form */}
      <form onSubmit={(e) => handleSubmitForm(e)}>
        {/* Display current skill about to add to skillArr */}
        <p>Skill: {skill}</p>
        {/* the onChange synthetic event will run EVERY TIME the user "changes" the text in the input. 
            e.target.value holds the value in the input. So on every keystroke or deletion we set our skill state 
            variable to what the user changed the text to

            the value attribute ensurs what dis[;ays in the text box is consistent
              with the current value of skill variable
        */}
        <input
          type="text"
          name="skill"
          id="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        {/* FORM ERROR: every time the user changes what is in the <input>, this rerenders
            the component, and will go through this javascript and will check if the skill 
            is greater less than 3 chars. 
        */}
        {skill.length < 3 ? (
          <p>The skill must be at least 3 characters</p>
        ) : null}
        <button id="btn">button</button>
      </form>
      <h2>SKILLS</h2>
      {/* Loop through skill array, return a p element w/ skill text */}
      {skillArr.map((skillItem, index) => (
        <p key={index}>
          Skill # {index + 1}: {skillItem}
        </p>
      ))}
    </div>
  );
}

export default App;

// const handleSetWord = (e) => {
//   console.log(e);
//   setWord("peanutbutter");
// };
