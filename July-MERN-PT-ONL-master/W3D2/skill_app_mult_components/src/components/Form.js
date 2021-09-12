import { useState } from "react";
const Form = (props) => {
  const { handleAddSkillToSkillArray } = props;
  // We define this state variable on the Form component
  // because it is the only component that needs access
  // to this state var
  const [skill, setSkill] = useState("");
  /*
    Because we defined the skill state variable in this component,
    we had to split up this function and added this code here
    rather than being combined with code in handleAddSkillToSkillArray.
    This function  handleAddSKill builds our newSkillObj, taking the skikk
    state variable, and setting the level to 1 for each skill. It then 
    feeds handleAddSkillToSkillArray this newSkillObj to be added
    to skillArr.
  */

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkillObj = {
      skill: skill,
      level: 1,
    };
    handleAddSkillToSkillArray(newSkillObj);
    setSkill("");
  };
  return (
    <form onSubmit={(e) => handleAddSkill(e)}>
      {/* On every change inside this input, call setSkill with change */}
      <input
        type="text"
        name="skill"
        onChange={(e) => setSkill(e.target.value)}
        value={skill}
      />
      <button>Add Skill</button>
    </form>
  );
};

export default Form;
