import { Drawer as MUIDrawer } from "@mui/material";
import { Options } from "../Options/Options";

export const Drawer = ({ saveOptions, isOpen = true, options, setOptions }) => {
  return (
    <MUIDrawer open={isOpen} anchor="bottom">
      <Options
        saveOptions={saveOptions}
        options={options}
        setOptions={setOptions}
      />
    </MUIDrawer>
  );
};
