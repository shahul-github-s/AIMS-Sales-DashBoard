import React, { useState, useEffect, useRef } from "react";
import Spring from "@components/Spring";
import Select from "@ui/Select";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@contexts/themeContext";
import { useWindowSize } from "react-use";
import { generateGridPoints, numFormatter } from "@utils/helpers";
import { PERIODS } from "@constants/options";
import sales_chart from "@db/sales_chart"; // Import sales_chart

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-peach p-2.5 rounded-md dark:shadow-md">
        <p className="text-[18px] font-semibold !text-white mb-1">{label}</p>
        <p className="text-[15px] font-semibold text-white">
          Profit: ₹{payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// Default data for the chart
const defaultData = {
  week: [
    { name: "Mon", b: 0 },
    { name: "Tues", b: 0 },
    { name: "Wednes", b: 0 },
    { name: "Thurs", b: 0 },
    { name: "Fri", b: 0 },
    { name: "Satur", b: 0 },
    { name: "Sun", b: 0 },
  ],
  month: [
    { name: "01-05", b: 0 },
    { name: "06-10", b: 0 },
    { name: "11-15", b: 0 },
    { name: "16-20", b: 0 },
    { name: "21-25", b: 0 },
    { name: "26-31", b: 0 },
  ],
  year: [
    { name: "Jan-Mar", b: 0 },
    { name: "Apr-Jun", b: 0 },
    { name: "Jul-Sep", b: 0 },
    { name: "Oct-Dec", b: 0 },
  ],
};

// Fetch data from Google Apps Script
const fetchSalesData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyyujOq2iUHk38KphwhUqKNBMdFu6Oub67nyCCasDugHKZn5Fjn2xGEpghW-RxEPgG8/exec"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sales data:", error);
    return null; // Return null on error
  }
};

const SalesAnalyticsArea = () => {
  const { width } = useWindowSize();
  const { theme } = useTheme();
  const [period, setPeriod] = useState(PERIODS[0]);
  const [chartData, setChartData] = useState(defaultData[period.value]);
  const [allData, setAllData] = useState({
    week: defaultData.week,
    month: defaultData.month,
    year: defaultData.year,
  }); // Store all data for each period

  // Fetch data every second
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSalesData();
      if (data) {
        // Only update allData if there is new data
        const newAllData = {
          week: data.week || defaultData.week,
          month: data.month || defaultData.month,
          year: data.year || defaultData.year,
        };

        // Check if the new data is different before updating
        if (JSON.stringify(newAllData) !== JSON.stringify(allData)) {
          setAllData(newAllData);
        }
      }
    };

    fetchData(); // Initial fetch

    // Set interval to fetch data every second
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [allData]); // Fetch data every second, check allData

  // Update chart data when period changes
  useEffect(() => {
    const newChartData = allData[period.value];
    // Only update chartData if newChartData is different from current
    if (
      newChartData &&
      JSON.stringify(newChartData) !== JSON.stringify(chartData)
    ) {
      setChartData(newChartData);
    }
  }, [period, allData]); // Only run when period or allData changes

  return (
    <Spring className="card flex flex-col gap-[22px] h-[392px] xs:h-[315px] p-5 xs:p-6 md:h-full">
      <div className="flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between xs:gap-5">
        <h2>Profit Analytics</h2>
        <div className="min-w-[105px]">
          <Select
            value={period}
            variant="minimal"
            onChange={setPeriod}
            options={PERIODS}
          />
        </div>
      </div>
      <div className="flex-1 overflow-hidden -mr-2 md:-ml-11 md:-mr-4">
        <ResponsiveContainer width="99%" height="100%" id="salesAnalytics">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 7, left: 7, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="salesAnalyticsFill"
                x1="-124.434"
                y1="-94.766"
                x2="-124.434"
                y2="227.785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--peach)" />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "white" : "transparent"}
                  stopOpacity="0.01"
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontalPoints={generateGridPoints("salesAnalytics", 50, "x")}
              strokeWidth={1}
              stroke="var(--cartesian-grid)"
              strokeDasharray="8 8"
            />
            <XAxis
              dataKey="name"
              dy={10}
              axisLine={false}
              tickLine={false}
              hide={width < 768}
            />
            <YAxis
              tickCount={7}
              tickFormatter={(value) => numFormatter(value, 0)}
              axisLine={false}
              tickLine={false}
              hide={width < 768}
            />
            <Tooltip
              cursor={{ strokeDasharray: "8 8", stroke: "var(--peach)" }}
              content={<CustomTooltip />}
            />
            <Area
              type="monotone"
              dataKey="b"
              stroke="var(--peach)"
              strokeWidth={3}
              strokeLinecap="round"
              fill="url(#salesAnalyticsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default SalesAnalyticsArea;
