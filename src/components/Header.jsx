import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        variant="h5"
        color={theme.palette.info.light}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Header;
