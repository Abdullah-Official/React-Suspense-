import { useState, Suspense, lazy, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const Foo = ({ name }) => {
  const Test = lazy(() => import(`./components/${name}.jsx`));
  return <Test />;
};

function App() {
  const [components, setComponents] = useState([
    {
      ComponentName: "comp1",
    },
    {
      ComponentName: "comp2",
    },
    {
      ComponentName: "comp3",
    },
  ]);

  return (
    <div className="App">
      
      <Suspense fallback={"Loading..."}>
        {components.map((v, i) => {
          return <Foo name={v.ComponentName} />;
        })}
      </Suspense>
    </div>
  );
}

export default App;
