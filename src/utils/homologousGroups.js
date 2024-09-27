import { getRandomSelection } from "./utils";
import { getRandomInt } from "./utils";

export const homologousGroups = {
  // TODO: triglycerides, terpines
  alkanes: {
    name: "alkanes",
    displayName: "Alkane",
    suffix: "ane",
    hasFunctionalGroup: false,
  },
  alkenes: {
    name: "alkenes",
    displayName: "Alkene",
    suffix: "ene",
    hasFunctionalGroup: true,
    anyGroupLocationAllowed: false,
    functionalGroup: "double bond",
  },
  alcohols: {
    name: "alcohols",
    displayName: "Alcohol",
    suffix: "ol",
    hasFunctionalGroup: true,
    anyGroupLocationAllowed: true,
    functionalGroup: "OH",
  },
  carboxylicAcids: {
    name: "carboxylicAcids",
    displayName: "Carboxylic Acid",
    suffix: "oic acid",
    hasFunctionalGroup: true,
    anyGroupLocationAllowed: true,
    functionalGroup: "COOH",
  },
  esters: {
    name: "esters",
    displayName: "Ester",
    suffix: null, // TODO: figure out where this will happen
    hasFunctionalGroup: true,
    anyGroupLocationAllowed: false,
    functionalGroup: "ROOR",
  },
};

export const getRandomFamily = (allowed = ["alkanes"]) => {
  const fromAllowed = getRandomSelection(allowed);
  return homologousGroups[fromAllowed];
};

export const getFunctionalGroupPosition = ({
  moleculeLength = 1,
  selectedFamily = {},
}) => {
  if (selectedFamily.hasFunctionalGroup && moleculeLength > 1) {
    return selectedFamily.anyGroupLocationAllowed
      ? getRandomInt(moleculeLength)
      : getRandomInt(moleculeLength - 1);
  }
  return null;
};
