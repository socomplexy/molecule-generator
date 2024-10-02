import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/Molecule.scss";
import { Components } from "./Components";
import { Views } from "./Views";
import { Utils } from "./utils";

function App() {
  const [blurText, setBlurText] = useState(true);
  const toggleTextBlur = (s = null) => setBlurText(s);

  const [isOpen, setIsOpen] = useState(true);
  const toggleIsOpen = (status) => setIsOpen(status);

  const [options, setOptions] = useState({
    alkanes: true,
    alkenes: true,
    branchesEnabled: false,
    multipleBranchesEnabled: false,
    showColour: true,
    familiesAllowed: ["alkanes", "alkenes"],
    maximumLength: 8,
  });

  const [state, setState] = useState({});
  const saveOptions = () => {
    toggleTextBlur(true);
    toggleIsOpen(false);
    setState(Utils.generateMolecule(options));
  };

  return (
    <div className="App">
      <Components.Drawer
        isOpen={isOpen}
        saveOptions={saveOptions}
        options={options}
        setOptions={setOptions}
      />
      {Object.keys(state).length ? (
        <Views.Molecule
          setup={state}
          blurText={blurText}
          toggleTextBlur={toggleTextBlur}
          openOptions={() => toggleIsOpen(true)}
          saveOptions={saveOptions}
        />
      ) : null}
    </div>
  );
}

export default App;
