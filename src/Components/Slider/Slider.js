import { Slider as MUISlider, Typography } from "@mui/material";

export const Slider = ({
  label = "",
  defaultValue,
  step,
  min,
  max,
  onChange,
}) => {
  return (
    <>
      <Typography gutterBottom>{label}</Typography>
      <MUISlider
        aria-label={label}
        defaultValue={defaultValue}
        step={step}
        marks
        min={min}
        max={max}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </>
  );
};
