import { h, render, Component } from 'preact';

function MyComponent(props) {
  return <div>My name is {props.name}.</div>;
}

// Usage
const App = <MyComponent name="Ayman Farhat" />;

const root = document.querySelector("#root");

render(App, root);
