import React from 'react';

// This is a stateless functional component => does not manage state and does not have access to 'this'
const Action = (props) => (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );

export default Action;
