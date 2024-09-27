import {
  Checkbox as MUICheckbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

export const Checkbox = ({ label = "", checked, disabled, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MUICheckbox
            label={label}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};
