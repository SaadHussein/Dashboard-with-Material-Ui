import Header from "../components/Header";
import ResponsiveTimeLineChart from "../components/ResponsiveTimeLineChart";

const TimeLineChart = () => {
  return (
    <>
      <Header title={"TimeLine Chart"} subTitle={"Simple TimeLine Chart"} />
      <ResponsiveTimeLineChart isDashboard={false} />
    </>
  );
};

export default TimeLineChart;
