// components
import Spring from "@components/Spring";
import Select from "@ui/Select";
import ChartLegend from "@ui/ChartLegend";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// hooks
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

// utils
import { generateGridPoints, numFormatter } from "@utils/helpers";

// constants
import { PERIODS } from "@constants/options";

// data placeholder
import sales_chart from "@db/sales_chart"; // Sales chart for default data structure

// Fetch data from Google Apps Script (Same as file 1)
const fetchSalesData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyyujOq2iUHk38KphwhUqKNBMdFu6Oub67nyCCasDugHKZn5Fjn2xGEpghW-RxEPgG8/exec"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sales data:", error);
    return null;
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-white dark:bg-body p-3 rounded-[10px] shadow-lg">
        <p className="h3 mb-1.5">{label}</p>
        <div className="flex flex-col gap-1.5 text-[15px] font-semibold text-white">
          {payload.map((item, index) => (
            <ChartLegend
              color={item.fill}
              label={`${item.value}`}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const SalesAnalyticsBar = () => {
  const { width } = useWindowSize();
  const [period, setPeriod] = useState(PERIODS[0]);
  const [allData, setAllData] = useState(null); // Store all sales data
  const [chartData, setChartData] = useState(
    sales_chart[period.value]?.data || []
  ); // Store the chart data

  // Fetch sales data on mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSalesData();
      if (data) {
        // Update sales_chart object based on fetched data
        sales_chart.week.data = data.week;
        sales_chart.month.data = data.month;
        sales_chart.year.data = data.year;

        setAllData(data); // Store fetched data in state
        setChartData(data[period.value]); // Set the initial chart data
      } else {
        // If fetching fails, use default sales_chart data
        setChartData(sales_chart[period.value]?.data || []);
      }
    };

    fetchData();
  }, []);

  // Update chart data when period changes
  useEffect(() => {
    if (allData) {
      setChartData(allData[period.value]); // Set chart data based on selected period
    }
  }, [period, allData]);

  const points = generateGridPoints("salesAnalyticsBar", 40, "x");

  return (
    <Spring className="card flex flex-col p-5 h-[392px] xs:p-6 md:h-full">
      <div className="flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
        <h2>Sales Analytics</h2>
        <div className="min-w-[105px]">
          <Select value={period} onChange={setPeriod} options={PERIODS} />
        </div>
      </div>
      <div className="flex gap-4 mt-3 mb-5 md:justify-end">
        <ChartLegend color="var(--blue)" label="Lead" />
        <ChartLegend color="var(--peach)" label="Profit" />
      </div>
      <div className="flex-1 overflow-hidden md:-ml-6 md:-mr-2.5">
        <ResponsiveContainer width="99%" height="100%" id="salesAnalyticsBar">
          <BarChart
            data={chartData} // Use the chartData which updates dynamically
            margin={false}
            barGap={0}
          >
            <CartesianGrid
              vertical={false}
              horizontalPoints={points}
              stroke="var(--cartesian-grid)"
              strokeDasharray="8 8"
            />
            <XAxis
              dataKey="name"
              dy={8}
              hide={width < 768}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              hide={width < 768}
              tickFormatter={(value) => numFormatter(value, 0)}
              tickCount={6}
              dx={-8}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar
              dataKey="a"
              fill="var(--blue)"
              maxBarSize={width < 768 ? 8 : 24}
              radius={8}
            />
            <Bar
              dataKey="b"
              fill="var(--peach)"
              maxBarSize={width < 768 ? 8 : 24}
              radius={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default SalesAnalyticsBar;
