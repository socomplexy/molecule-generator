import { Button, Stack } from "@mui/material";
import {
  Refresh as RefreshIcon,
  Settings as SettingsIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

export const ButtonStack = ({
  blurred,
  toggleTextBlur,
  openOptions,
  saveOptions,
}) => {
  const isSmallScreen = window.innerWidth <= 550;
  return (
    <Stack direction={isSmallScreen ? "column" : "row"} spacing={3}>
      <Button
        variant="contained"
        size="small"
        onClick={() => toggleTextBlur(!blurred)}
        endIcon={blurred ? <VisibilityIcon /> : <VisibilityOffIcon />}
        color="primary"
      >
        Toggle Name
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={saveOptions}
        endIcon={<RefreshIcon />}
        color="success"
      >
        Generate
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={openOptions}
        endIcon={<SettingsIcon />}
        color="error"
      >
        Update Options
      </Button>
    </Stack>
  );
};
