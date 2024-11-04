import { useState, useEffect } from "react";
import Spring from "@components/Spring";
import Select from "@ui/Select";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartLegend from "@ui/ChartLegend";

import { PERIODS } from "@constants/options";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxzKAkPSeJOWC0IIAgmPtCCrjt1ZxEybnWP7Duy-oE8HQPbgCc7o8bX3KYeOlRY0Z9x/exec"; // Replace with your Web App URL

const SalesByCategoryRadialBar = () => {
  const [period, setPeriod] = useState(PERIODS[0]);
  const [chartData, setChartData] = useState([
    {
      name: "Expenses",
      values: { week: 0, month: 0, year: 0 },
      fill: "var(--yellow)",
    },
    {
      name: "Profit",
      values: { week: 0, month: 0, year: 0 },
      fill: "var(--turquoise)",
    },
    {
      name: "Customers",
      values: { week: 0, month: 0, year: 0 },
      fill: "var(--blue)",
    },
  ]);

  // Function to fetch data from Google Sheets
  const fetchChartData = async () => {
    try {
      const response = await fetch(GOOGLE_SHEET_URL);
      const newData = await response.json();

      // Transform newData to fit chartData format and compare with existing chartData
      const updatedData = [
        { name: "Expenses", values: newData.expenses, fill: "var(--yellow)" },
        { name: "Profit", values: newData.profit, fill: "var(--turquoise)" },
        { name: "Customers", values: newData.customers, fill: "var(--blue)" },
      ];

      // Update state only if data has changed
      const isDataChanged = updatedData.some(
        (item, index) =>
          item.values.week !== chartData[index].values.week ||
          item.values.month !== chartData[index].values.month ||
          item.values.year !== chartData[index].values.year
      );

      if (isDataChanged) {
        setChartData(updatedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use effect to fetch data every 1 second
  useEffect(() => {
    const intervalId = setInterval(fetchChartData, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return <div className="basic-tooltip">{payload[0].value}</div>;
      // return <div className="basic-tooltip">${payload[0].value}</div>;
    }
    return null;
  };

  return (
    <Spring className="card flex flex-col p-5 h-[392px] xs:p-6 md:h-full">
      <div
        className="flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between md:flex-col
               md:items-stretch lg:flex-row lg:items-center"
      >
        <h2>Sales Feedback</h2>
        <div className="min-w-[105px]">
          <Select
            variant="minimal"
            value={period}
            onChange={setPeriod}
            options={PERIODS}
          />
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ResponsiveContainer width="99%" height="100%">
          <RadialBarChart
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="100%"
          >
            <RadialBar
              maxBarSize={16}
              minAngle={15}
              cornerRadius={10}
              background={{ fill: "var(--border)" }}
              clockWise
              dataKey={`values.${period.value}`}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
        {chartData.map((item, index) => (
          <ChartLegend key={index} color={item.fill} label={item.name} />
        ))}
      </div>
    </Spring>
  );
};

export default SalesByCategoryRadialBar;
