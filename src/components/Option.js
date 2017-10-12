import React from 'react';

// This is a stateless functional component => does not manage state and does not have access to 'this'
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
        remove
      </button>
    </div>
  );
};

export default Option;
