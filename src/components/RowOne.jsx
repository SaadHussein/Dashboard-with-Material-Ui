import { Stack, useTheme } from "@mui/material";
import CardComponent from "./CardComponent";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const data1 = [
  {
    id: "javascript",
    label: "javascript",
    value: 40,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 60,
    color: "hsl(22, 90%, 90%)",
  },
];

const data2 = [
  {
    id: "javascript",
    label: "javascript",
    value: 70,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 30,
    color: "hsl(22, 90%, 90%)",
  },
];

const data3 = [
  {
    id: "javascript",
    label: "javascript",
    value: 44,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 66,
    color: "hsl(22, 90%, 90%)",
  },
];

const data4 = [
  {
    id: "javascript",
    label: "javascript",
    value: 77,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 33,
    color: "hsl(22, 90%, 90%)",
  },
];

const RowOne = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <CardComponent
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        data={data1}
        ratio={"+14%"}
        scheme={"nivo"}
      />
      <CardComponent
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales Obtained"}
        data={data2}
        ratio={"+21%"}
        scheme={"category10"}
      />
      <CardComponent
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        data={data3}
        ratio={"+5%"}
        scheme={"accent"}
      />
      <CardComponent
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        data={data4}
        ratio={"+43%"}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default RowOne;
