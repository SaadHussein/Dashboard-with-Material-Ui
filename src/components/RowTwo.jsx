import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ResponsiveTimeLineChart from "./ResponsiveTimeLineChart";
import { DownloadOutlined } from "@mui/icons-material";

export const Transactions = [
  {
    txId: "01e4dsaewf",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.91",
  },
  {
    txId: "0315dsaaef",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsaef",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szvfew",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.49",
  },
];

const RowTwo = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, minWidth: 400, flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography ml={4} variant="body2">
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <ResponsiveTimeLineChart isDashboard={true} />
      </Paper>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: "280px",
          maxHeight: "380px",
          overflowY: "auto",
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((Transaction) => (
          <Paper
            key={Transaction.txId}
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1" fontWeight={600}>
                {Transaction.txId}
              </Typography>
              <Typography variant="body2">{Transaction.user}</Typography>
            </Box>
            <Typography variant="body2">{Transaction.date}</Typography>
            <Typography
              variant="body2"
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
            >
              ${Transaction.cost}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};

export default RowTwo;
