import { getRandomInt, getRandomSelection } from "./utils";
import { carbonCountPrefix } from "./prefixes";
import {
  getRandomFamily,
  getFunctionalGroupPosition,
} from "./homologousGroups";

const formatAtoms = (data) => {
  const atoms = [];

  for (var i = 0; i < data.moleculeLength; i++) {
    // TODO: hasDoubleBond will need to be expanded to all functional groups
    const hasDoubleBond =
      data.functionalGroup && data.functionalGroup.position === i + 1;
    const perviousHasDoubleBond =
      data.functionalGroup && data.functionalGroup.position === i;
    // const isFirst = i === 0;
    // const isLast = i === data.moleculeLength - 1;
    // TODO: currently looking at horizontal double bonds. Needs to consider vertical when branches introduced.
    const positionToSkip =
      hasDoubleBond || perviousHasDoubleBond ? getRandomInt(2, 1) : null;
    const currentAtom = {
      bondMarkers: {
        t: !positionToSkip || positionToSkip !== 1 ? "xt" : null,
        b: !positionToSkip || positionToSkip !== 2 ? "xb" : null,
        l: perviousHasDoubleBond ? "xxl" : "xl",
        r: hasDoubleBond ? "xxr" : "xr",
      },
    };

    atoms.push(currentAtom);
  }
  return atoms;
};

export const generateMolecule = (
  options = {
    familiesAllowed: ["alkanes"],
    branchesEnabled: false,
    multipleBranchesEnabled: false,
  },
  callback
) => {
  const moleculeLength = getRandomInt();
  const prefix = carbonCountPrefix[moleculeLength];
  const selectedFamily = getRandomFamily(
    options.familiesAllowed.filter((f) =>
      moleculeLength === 1 ? f !== "alkenes" : f
    )
  );

  // should branches be generated?
  const canHaveBranch = options.branchesEnabled && moleculeLength > 2;
  const shouldGenerateBranch = canHaveBranch
    ? getRandomSelection([true, false])
    : false;

  // TODO: generate branches, keeping in mind that we need the branch length to not extend the molecule length
  // TODO: Update placements once branch functionality in place

  const functionalGroupPosition = getFunctionalGroupPosition({
    moleculeLength,
    selectedFamily,
  });

  const functionalGroup = selectedFamily.hasFunctionalGroup
    ? {
        type: selectedFamily.functionalGroup,
        position: functionalGroupPosition,
      }
    : null;

  // as molecules are reverable, the named location is counting from the end closest
  const displayFunctionalGroupLocationInName =
    !functionalGroup || moleculeLength < 4
      ? ""
      : functionalGroupPosition > Math.floor(moleculeLength / 2)
      ? moleculeLength - functionalGroupPosition
      : functionalGroupPosition;

  let generatedMolecule = {
    ...options,
    family: selectedFamily.displayName,
    functionalGroup,
    moleculeLength,
    name: `${prefix}${displayFunctionalGroupLocationInName}${selectedFamily.suffix}`,
  };

  generatedMolecule = {
    ...generatedMolecule,
    atoms: formatAtoms(generatedMolecule),
  };

  callback?.();
  return generatedMolecule;
};
