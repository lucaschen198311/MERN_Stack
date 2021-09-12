const SkillList = (props) => {
  const { skillArr, setSkillArr } = props;
  /*
    handleRemoveSkill: function that takes in an index, filters out the index,
    and setSkillArr with new array that does not contain skill wanted to delete.
    We define this function in this component to "localize" the component. We can 
    localize this function because this component receives skillArr and setSkillArr
    as props.  
  */

  const handleRemoveSkill = (index) => {
    const filteredArr = skillArr.filter((item, idx) => idx !== index);
    setSkillArr(filteredArr);
  };
  return (
    <>
      {/* Use map function to loop through skillArr and return list of skills */}
      {skillArr.map((item, index) => (
        <div key={index}>
          <p>Skill: {item.skill}</p>
          <p>Level: {item.level}</p>
          {/* When this button is clicked, trigger handleRemoveSkill function */}
          <button onClick={() => handleRemoveSkill(index)}>REMOVE</button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default SkillList;
