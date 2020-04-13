function MyComponent(props) {
  return <div>My name is {props.name}.</div>;
}

// Usage
const App = <MyComponent name="John Doe" />;

const root = document.querySelector("#root");

render(App, root);
