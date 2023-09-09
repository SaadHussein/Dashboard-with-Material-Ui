import RowTwo from "../components/RowTwo";
import RowOne from "../components/RowOne";
import RwoThree from "../components/RwoThree";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"Dashboard"}
          subTitle={"Welcome To Your Dashboard"}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            color="primary"
            variant="contained"
          >
            <DownloadOutlined /> Download Reports
          </Button>
        </Box>
      </Stack>
      <RowOne />
      <RowTwo />
      <RwoThree />
    </div>
  );
};

export default Dashboard;
