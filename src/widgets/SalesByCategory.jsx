import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Tooltip, Pie, PieChart, Cell } from "recharts";
import Spring from "@components/Spring";
import Select from "@ui/Select";
import { useWindowSize } from "react-use";
import { PERIODS } from "@constants/options";
import { commaFormatter, numFormatter } from "@utils/helpers";

// Default data to show when API data hasn't loaded yet
const defaultData = [
  {
    name: "General Service",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "turquoise",
    darkAura: "#1B3838",
    lightAura: "#F4FFFF",
  },
  {
    name: "E-Sevai",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "blue",
    darkAura: "#14344A",
    lightAura: "#F1F7FF",
  },
  {
    name: "Job Application Support",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "yellow",
    darkAura: "#3B300A",
    lightAura: "#FFFBF0",
  },
  {
    name: "Travel Services",
    data: {
      week: { profit: 0, products: 0 },
      month: { profit: 0, products: 0 },
      year: { profit: 0, products: 0 },
    },
    color: "peach",
    darkAura: "#3B300A",
    lightAura: "#FFFBF0",
  },
];

const SalesByCategory = () => {
  const { width } = useWindowSize();
  const [period, setPeriod] = useState(PERIODS[0]); // Default to the first period option
  const [data, setData] = useState(defaultData); // Start with default data
  const [error, setError] = useState(null); // Track error state
  const [retryCount, setRetryCount] = useState(0); // Track retry attempts

  // Define the fetchData function inside the component
  const fetchData = async () => {
    try {
      setError(null); // Reset error before new fetch attempt

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby4NhtW4ag8QNkhUXgse32KQ1y1GgQiwuPSv1_7ezjFoRLut57mdbErS6y8cSRSbzaK/exec"
      );

      // Handle non-200 responses
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();

      // Validate the response structure
      if (
        !jsonData.generalService ||
        !jsonData.eSevai ||
        !jsonData.jobApplicationSupport ||
        !jsonData.travelServices
      ) {
        throw new Error("Invalid data structure received from API.");
      }

      // Set the data from the API response into the same structure
      const updatedData = [
        {
          name: "General Service",
          data: jsonData.generalService,
          color: "turquoise",
          darkAura: "#1B3838",
          lightAura: "#F4FFFF",
        },
        {
          name: "E-Sevai",
          data: jsonData.eSevai,
          color: "blue",
          darkAura: "#14344A",
          lightAura: "#F1F7FF",
        },
        {
          name: "Job Application Support",
          data: jsonData.jobApplicationSupport,
          color: "yellow",
          darkAura: "#3B300A",
          lightAura: "#FFFBF0",
        },
        {
          name: "Travel Services",
          data: jsonData.travelServices,
          color: "peach",
          darkAura: "#3B300A",
          lightAura: "#FFFBF0",
        },
      ];

      // Only update state if data is new, otherwise keep the old data
      setData((prevData) =>
        JSON.stringify(prevData) !== JSON.stringify(updatedData)
          ? updatedData
          : prevData
      );
      setRetryCount(0); // Reset retry count on successful fetch
    } catch (error) {
      // setError(error.message);

      // Retry mechanism: Retry up to 3 times after a failure
      if (retryCount < 3) {
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          fetchData(); // Retry after 5 seconds
        }, 5000);
      } else {
        // console.error("Max retry attempts reached: ", error.message);
      }
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately when the component mounts

    // Set up polling to fetch data every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 1000); // 5000ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [retryCount]); // Include retryCount to trigger re-fetch on retry

  // Calculate the total profit for the selected period
  const getTotal = () => {
    return data.reduce((acc, curr) => acc + curr.data[period.value].profit, 0);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="basic-tooltip">
          {numFormatter(payload[0].value, 0, "₹")}
        </div>
      );
    }
    return null;
  };

  const LegendItem = ({ item, period }) => {
    const total = data.reduce(
      (acc, curr) => acc + curr.data[period].products,
      0
    );
    const percentage = (item.data[period].products / total) * 100;
    return (
      <div className="flex gap-2.5">
        <span
          className="flex items-center justify-center w-[15px] h-[15px] rounded-full mt-1 shrink-0"
          style={{ backgroundColor: item.lightAura }}
        >
          <span className={`w-[7px] h-[7px] rounded-full bg-${item.color}`} />
        </span>
        <div className="flex flex-col flex-1 gap-1">
          <p className="flex justify-between font-medium text-[15px] text-header">
            {item.name} ({percentage.toFixed(2)}%)
            <span>₹{commaFormatter(item.data[period].profit)}</span>
          </p>
          <p className="uppercase text-xs text-label">
            {commaFormatter(item.data[period].products)} Lead Count
          </p>
        </div>
      </div>
    );
  };

  return (
    <Spring className="card flex flex-col gap-4 p-5 h-full xs:p-6">
      <div className="flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between">
        <h2>Profit By Category</h2>
        <div className="min-w-[105px]">
          <Select options={PERIODS} value={period} onChange={setPeriod} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 flex-1 md:flex-row md:items-center md:gap-[65px]">
        <div
          className="relative overflow-hidden min-h-[240px] min-w-[240px] xs:min-w-[294px]
                     xs:min-h-[294px] m-auto md:m-0 md:w-[294px] md:h-[294px]"
        >
          <ResponsiveContainer width="99%" height="99%">
            <PieChart>
              <Pie
                data={data}
                dataKey={`data.${period.value}.profit`}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={width < 414 ? 118 : 140}
                innerRadius={95}
                strokeWidth={0}
                fill="#8884d8"
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={`var(--${item.color})`} />
                ))}
              </Pie>
              <Tooltip cursor={false} content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <span className="counter absolute-center">
            {numFormatter(getTotal(), 0, "₹")}
          </span>
        </div>
        <div className="flex flex-col flex-1 w-full gap-4">
          {data.map((item, index) => (
            <LegendItem key={index} item={item} period={period.value} />
          ))}
        </div>
      </div>
      {error && (
        <p className="text-red-600">
          Error: {error}. Retrying ({retryCount}/3)...
        </p>
      )}
    </Spring>
  );
};

export default SalesByCategory;
