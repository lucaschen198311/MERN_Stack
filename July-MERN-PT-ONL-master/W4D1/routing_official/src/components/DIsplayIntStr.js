const DisplayIntStr = (props) => {
  // we can pull off data from url using props.parameter
  return (
    <div style={{ backgroundColor: props.color }}>
      <h1>
        Int: {props.int} Str: {props.str}
      </h1>
    </div>
  );
};

export default DisplayIntStr;
