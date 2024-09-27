import { Button as MUIButton } from "@mui/material";

export const Button = ({ label = "", onClick }) => {
  return (
    <MUIButton onClick={onClick} variant="contained">
      {label}
    </MUIButton>
  );
};
