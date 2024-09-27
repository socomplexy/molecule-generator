import { Avatar } from "@mui/material";
import { Utils } from "../../utils";

export const Molecule = ({ setup }) => {
  return (
    <div className="molecule-wrapper">
      {/* LEFT COLUMN - INCLUDES PRECENDING HYDROGEN OR FUNCTIONAL GROUP */}
      <div className="molecule-row">
        <div className={`atom-wrapper`}>{/* EMPTY WRAPPER */}</div>

        <div className={`atom-wrapper`}>
          <Avatar
            sx={{ height: 25, width: 25 }}
            className={`xr ${setup?.showColour ? Utils.elements[1].name : ""}`}
          >
            {Utils.elements[1].symbol}
          </Avatar>
        </div>
        <div className={`atom-wrapper`}>{/* EMPTY WRAPPER */}</div>
      </div>

      {/* MAIN CHAIN */}
      {setup?.atoms?.map((atom, index) => (
        <div className="molecule-row" key={`main-chain-${index}`}>
          {/* TOP HYDROGEN */}
          <div className={`atom-wrapper ${atom.bondMarkers.t ? "xb" : ""}`}>
            {atom.bondMarkers.t ? (
              <Avatar
                sx={{ height: 25, width: 25 }}
                className={`${setup?.showColour ? Utils.elements[1].name : ""}`}
              >
                {Utils.elements[1].symbol}
              </Avatar>
            ) : null}
          </div>

          {/* THE MAIN CARBON */}
          <div
            className={`atom-wrapper ${atom.bondMarkers.t} ${atom.bondMarkers.b}`}
          >
            <Avatar
              sx={{ height: 25, width: 25 }}
              className={`${
                setup?.showColour ? Utils.elements[6].name : ""
              }   ${atom.bondMarkers.l} ${atom.bondMarkers.r}`}
            >
              {Utils.elements[6].symbol}
            </Avatar>
          </div>

          {/* BOTTOM HYDROGEN */}
          <div className={`atom-wrapper ${atom.bondMarkers.b ? "xt" : ""}`}>
            {atom.bondMarkers.b ? (
              <Avatar
                sx={{ height: 25, width: 25 }}
                className={`${setup?.showColour ? Utils.elements[1].name : ""}`}
              >
                {Utils.elements[1].symbol}
              </Avatar>
            ) : null}
          </div>
          <div className={`atom-wrapper`}>{/* EMPTY WRAPPER */}</div>
        </div>
      ))}
      {/* RIGHT COLUMN - INCLUDES FOLLOWING HYDROGEN OR FUNCTIONAL GROUP */}
      <div className="molecule-row">
        <div className={`atom-wrapper`}>{/* EMPTY WRAPPER */}</div>

        <div className={`atom-wrapper`}>
          <Avatar
            sx={{ height: 25, width: 25 }}
            className={`xl ${setup?.showColour ? Utils.elements[1].name : ""}`}
          >
            {Utils.elements[1].symbol}
          </Avatar>
        </div>
        <div className={`atom-wrapper`}>{/* EMPTY WRAPPER */}</div>
      </div>
    </div>
  );
};
