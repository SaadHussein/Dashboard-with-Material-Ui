import Header from "../components/Header";
import ResponsiveGeographyChart from "../components/ResponsiveGeographyChart";

const GeographyChart = () => {
  return (
    <>
      <Header
        title={"Geography"}
        subTitle={"Geography Simple Geography Chart"}
      />
      <ResponsiveGeographyChart isDashboard={false} />
    </>
  );
};

export default GeographyChart;
