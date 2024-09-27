import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

export const Options = ({ saveOptions }) => {
  const [options, setState] = useState({
    alkanes: true,
    alkenes: false,
    branchesEnabled: false,
    multipleBranchesEnabled: false,
    showColour: false,
    familiesAllowed: ["alkanes"],
  });

  const updateFamiliesArray = (family, familySelected) => {
    if (familySelected) {
      return [...options.familiesAllowed, family];
    } else if (options.familiesAllowed.includes(family) === true) {
      return options.familiesAllowed.filter((f) => f !== family);
    }
  };

  const updateAlkanes = (state) =>
    setState({
      ...options,
      alkanes: state.target.checked,
    });
  const updateAlkenes = (state) =>
    setState({
      ...options,
      alkenes: state.target.checked,
      familiesAllowed: updateFamiliesArray("alkenes", state.target.checked),
    });
  const updateBranches = (state) =>
    setState({
      ...options,
      branchesEnabled: state.target.checked,
    });
  const updateMultipleBranches = (state) =>
    setState({
      ...options,
      multipleBranchesEnabled: state.target.checked,
    });
  const updateColourScheme = (state) =>
    setState({
      ...options,
      showColour: state.target.checked,
    });

  return (
    <div className="option-wrapper">
      <Checkbox
        onChange={updateAlkanes}
        label="Include alkanes"
        checked
        disabled
      />
      <Checkbox onChange={updateAlkenes} label="Include alkenes" />
      {/* <Checkbox onChange={updateBranches} label="Include branches" disabled />
      <Checkbox
        onChange={updateMultipleBranches}
        label="Allow multiple branches"
        disabled
      /> */}
      <Checkbox onChange={updateColourScheme} label="Colour elements" />
      <Button label="Generate" onClick={() => saveOptions(options)} />
    </div>
  );
};
