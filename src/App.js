import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/Molecule.scss";
import { Components } from "./Components";
import { Views } from "./Views";
import { Utils } from "./utils";

function App() {
  const [blurText, setBlurText] = useState(true);
  const toggleTextBlur = (s = null) => setBlurText(s);

  const [state, setState] = useState({});
  const saveOptions = (options) => {
    toggleTextBlur(true);
    setState(Utils.generateMolecule(options));
  };

  return (
    <div className="App">
      <Components.Options saveOptions={saveOptions} />
      {state?.name ? (
        <Components.MoleculeName
          name={`${state.name}`}
          blurred={blurText}
          onClick={toggleTextBlur}
        />
      ) : null}
      {Object.keys(state).length ? <Views.Molecule setup={state} /> : null}
    </div>
  );
}

export default App;
