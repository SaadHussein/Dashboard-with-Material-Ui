import Header from "../components/Header";
import ResponsivePieChart from "../components/ResponsivePieChart";

const PieChart = () => {
  return (
    <>
      <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
      <ResponsivePieChart isDashboard={false} />
    </>
  );
};

export default PieChart;
