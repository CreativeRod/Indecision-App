import React from 'react';

// This is a stateless functional component => does not manage state and does not have access to 'this'
const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>      
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
        remove
      </button>
    </div>
  );

export default Option;
