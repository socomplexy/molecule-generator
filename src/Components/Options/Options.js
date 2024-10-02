import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Slider } from "../Slider/Slider";

export const Options = ({ saveOptions, options, setOptions }) => {
  const updateFamiliesArray = (family, familySelected) => {
    if (familySelected) {
      return [...options?.familiesAllowed, family];
    } else if (options?.familiesAllowed.includes(family) === true) {
      return options?.familiesAllowed.filter((f) => f !== family);
    }
  };

  const updateAlkanes = (state) =>
    setOptions({
      ...options,
      alkanes: state.target.checked,
    });
  const updateAlkenes = (state) =>
    setOptions({
      ...options,
      alkenes: state.target.checked,
      familiesAllowed: updateFamiliesArray("alkenes", state.target.checked),
    });
  // const updateBranches = (state) =>
  //   setOptions({
  //     ...options,
  //     branchesEnabled: state.target.checked,
  //   });
  // const updateMultipleBranches = (state) =>
  //   setOptions({
  //     ...options,
  //     multipleBranchesEnabled: state.target.checked,
  //   });
  const updateColourScheme = (state) =>
    setOptions({
      ...options,
      showColour: state.target.checked,
    });
  const updateMaximumLength = (state) =>
    setOptions({
      ...options,
      maximumLength: state.target.value,
    });

  return (
    <div className="option-wrapper">
      <Checkbox
        onChange={updateAlkanes}
        label="Include alkanes"
        checked
        disabled
      />
      <Checkbox
        onChange={updateAlkenes}
        label="Include alkenes"
        checked={options?.alkenes}
      />
      {/* <Checkbox onChange={updateBranches} label="Include branches" disabled />
      <Checkbox
        onChange={updateMultipleBranches}
        label="Allow multiple branches"
        disabled
      /> */}
      <Checkbox
        onChange={updateColourScheme}
        label="Colour elements"
        checked={options?.showColour}
      />
      <Slider
        onChange={updateMaximumLength}
        label={`Maximum chain length: ${options?.maximumLength}`}
        defaultValue={8}
        step={1}
        min={1}
        max={20}
      />
      <Button label="Generate" onClick={() => saveOptions(options)} />
    </div>
  );
};
