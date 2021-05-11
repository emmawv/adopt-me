import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Mickey",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Punky",
  //       animal: "Dog",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Willy",
  //       animal: "Cat",
  //       breed: "Turkish Angora",
  //     }),
  //   ]
  //  );
  // createElement get three parametres: the kind of element or tag, the attributes the dom element will have (id, class, etc.) and the children to be passed into the element.
  
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};
// App is a component that returns markup.

// ReactDOM.render(React.createElement(App), document.getElementById("root")); // First we tell ReactDOM what component to render and then where to render it. In this case createElement recieves a composit component (a component created by us).

ReactDOM.render(<App />, document.getElementById("root"));
