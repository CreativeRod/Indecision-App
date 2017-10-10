console.log("App Is Running");

//JSX - JavaScript XML
// if statements
// Tenary Ops
// Logical and Op

const app = {
title: 'Indecision App',
subtitle: 'Put your life in the hands of a computer',
options: [],
};

/*
This function is linked to the form tag below, the 'e' is the event that makes everything happen.
*/
const onFormSubmit = (e) => {
  e.preventDefault(); // Stops full page refresh
  const option = e.target.elements.option.value;  // Provides access to elements

  if(option) {
    app.options.push(option); // Pushes brand new option in array
    e.target.elements.option.value = '';
    render();
  }
};

// This function is linked to the 'Remove All' button and when the event happens it resets to 0
const onRemoveAll = () => {
  app.options = [];
  render();
};

// Picks random options you enter
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

// This variable is a short cut to 'document.getElementById('<something>')'
const appRoot = document.getElementById('app');

// render is set in place here to rerender everytime an event happens
const render = () => {
  // This is where the actual action happens
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {/* We have to insert this as a JSX expression because you can't use arrays with out it*/}

        {
        app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })
        }

      </ol>
      {/* This is where the form starts,*/}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>

    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
