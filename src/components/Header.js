import React from 'react';

// This is a stateless functional component => does not manage state and does not have access to 'this'
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    {
      props.subtitle && <h2>{props.subtitle}</h2>
    }
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
