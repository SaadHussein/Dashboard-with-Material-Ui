import { Paper, Stack, Typography, useTheme } from "@mui/material";
import ResponsivePieChart from "./ResponsivePieChart";
import ResponsiveBarChart from "./ResponsiveBarChart";
import ResponsiveGeographyChart from "./ResponsiveGeographyChart";

const RwoThree = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} mt={2} flexWrap={"wrap"}>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Campaign
        </Typography>
        <ResponsivePieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 Revenue Generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes Extra Misc Expenditures and Costs
        </Typography>
      </Paper>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <ResponsiveBarChart isDashboard={true} />
      </Paper>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <ResponsiveGeographyChart isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default RwoThree;
