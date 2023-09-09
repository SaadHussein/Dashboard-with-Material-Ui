import Header from "../components/Header";
import ResponsiveBarChart from "../components/ResponsiveBarChart";
import React from "react";

const BarChart = () => {
  return (
    <>
      <Header
        title={"Bar Chart"}
        subTitle={"The Minimum Wage in Germany, France and Spain (EUR/Month)"}
      />
      <ResponsiveBarChart isDashboard={false} />
    </>
  );
};

export default BarChart;
