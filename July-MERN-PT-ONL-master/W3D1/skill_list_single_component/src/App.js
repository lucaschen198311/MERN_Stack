import "./App.css";
import { useState } from "react";

function App() {
  // This will be thestate variable and function to keep track of the current skill text the user enters in the input
  const [skill, setSkill] = useState("");
  // This will be the state variable and function to hold an array of skills and associated level ({})
  const [skillArr, setSkillArr] = useState([]);
  // Function to add skill to skill array
  const handleAddSkill = (e) => {
    e.preventDefault();
    // Define object to add to array. Each skill will be initialized with a level of 1
    const newSkillObj = {
      skill: skill,
      level: 1,
    };
    // set skill array with new skill obj and shallow copy of skillArr which will hold all other skills already added
    setSkillArr([newSkillObj, ...skillArr]);
    // Reset skill to empty string
    setSkill("");
  };

  // function to remove a skill from state.
  // Notice how we use the index of the skill because it is a unique identifier
  const handleRemoveSkill = (index) => {
    // filter function returns a new array with all items in skillArr whose index does NOT include
    // the skill we want to delete from state
    const filteredArr = skillArr.filter((item, idx) => idx !== index);
    // set skillArr with new array
    setSkillArr(filteredArr);
  };

  // function to increase skill level by 1
  const handleIncreaseSkillLevel = (index) => {
    // get the object inside skillArr we want to change
    let skillToIncreaseLevel = { ...skillArr[index] };

    // modify object: increase skill level by 1
    skillToIncreaseLevel.level++;
    // setSkillArr using slices and concat
    setSkillArr(
      [...skillArr.slice(0, index), skillToIncreaseLevel].concat(
        skillArr.slice(index + 1)
      )
    );
  };
  return (
    <div className="App">
      <h1>You've got mad skills</h1>
      <p>Add a skill</p>
      {/* form to add skill to skillArr */}
      <form onSubmit={(e) => handleAddSkill(e)}>
        {/* Every time the input changes, we set skill state variable */}
        <input
          type="text"
          name="skill"
          onChange={(e) => setSkill(e.target.value)}
          value={skill}
        />
        <button>Add Skill</button>
      </form>
      {/* Use map function to display skills in state */}
      {skillArr.map((item, index) => (
        // Remember map will render a list. WHen rendering a list in React,
        // we have to add a key so the browser can uniquely identify each element
        <div key={index}>
          <p>Skill: {item.skill}</p>
          <p>Level: {item.level}</p>
          {/* When this button is clicked, trigger handleRemoveSkill function called with index */}
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => handleRemoveSkill(index)}
          >
            REMOVE
          </button>
          {/* When this button is clicked, trigger handleIncreaseSkillLevel */}
          <button onClick={() => handleIncreaseSkillLevel(index)}>
            LEVEL UP
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
