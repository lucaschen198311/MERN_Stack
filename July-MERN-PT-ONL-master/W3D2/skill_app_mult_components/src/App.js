import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import SkillList from "./components/SkillList";

function App() {
  // The App component will have to hold the skillArr state variable because
  // both the Form component and the SkillList component need access to the var
  // This is "lifting state"
  const [skillArr, setSkillArr] = useState([]);
  // function to add skill to skill array. We offloaded some of the functionality
  // that was in this function to the Form component due to definining the
  // skill state variable in the Form component. So now this function just takes the new
  // newSkillObj and sets the skillArr
  const handleAddSkillToSkillArray = (newSkillObj) => {
    setSkillArr([newSkillObj, ...skillArr]);
  };

  // example state vatriable for checkbox below. This has nothing to do with the Skill App
  const [dummyBoolean, setDummyBoolean] = useState(false);
  return (
    <div className="App">
      <h1>You've got mad skills</h1>
      <p>Add a skill</p>
      {/* pass the Form component the function as props */}
      <Form handleAddSkillToSkillArray={handleAddSkillToSkillArray} />
      {/* Pass the SkillList component what it needs as props */}
      <SkillList skillArr={skillArr} setSkillArr={setSkillArr} />

      {/* =========== NOT RELATED TO SKILL APP. CHECKBOX EXAMPLE */}
      {/* Example checkbox, has nothing to do with skill App. 
          THe checkbox will be checked based on the value of a boolean variable.
      */}
      <h1>checkbox</h1>
      <input type="checkbox" checked={dummyBoolean} readOnly />
    </div>
  );
}

export default App;
