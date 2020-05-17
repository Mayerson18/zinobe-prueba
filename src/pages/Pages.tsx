import * as React from "react";
import CounterReducer from "../CounterReducer";
import Register from "../register";

// An object of all possible example components that can be rendered
const EXAMPLES = {
  CounterReducer
};

type Examples = keyof typeof EXAMPLES;

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const Pages = () => {
  const [example, setExample] = React.useState<Examples>("CounterReducer");
  const base = process.env.REACT_APP_BANK_BASE_CAPITAL;

  const ExampleComponent = EXAMPLES[example];

  const exampleButtons = EXAMPLE_NAMES.map(name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={name === example ? "active" : ""}
    >
      &lt;
      {name} /&gt;
    </button>
  ));

  return (
    <>
      <div className="container">
        <div className="app">
          {exampleButtons}
          <div className="separator" />
          <ExampleComponent />
        </div>
      </div>
    </>
  );
};

export default Pages;
