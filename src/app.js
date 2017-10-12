import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));

// When you create 2 tags open/close and add the content inbetween you have to use the {props.children} option to access and render to screen
