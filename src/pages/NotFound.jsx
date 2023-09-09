import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        There Path is Not Right.
        <br />
        <br />
        Please Try a True Link..
      </Typography>
    </Box>
  );
};

export default NotFound;
