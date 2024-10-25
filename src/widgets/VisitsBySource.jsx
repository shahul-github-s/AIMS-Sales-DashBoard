// components
import Spring from "@components/Spring";
import Select from "@ui/Select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// hooks
import { useState, useEffect, memo } from "react";

// constants
import { PERIODS } from "@constants/options";

// Define color constants for bars
const COLORS = {
  walkIn: "var(--blue)",
  insta: "var(--peach)",
  wb: "var(--turquoise)",
  fb: "var(--yellow)",
  metaAd: "var(--red)",
  camp: "var(--green)",
};

// Custom tooltip for the chart
const CustomTooltip = memo(({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="basic-tooltip">{payload[0].value}</div>;
  }
  return null;
});

// Main component for VisitsBySource
const VisitsBySource = () => {
  const [data, setData] = useState([
    {
      name: "Walk-in",
      value: { week: 0, month: 0, year: 0 },
      fill: COLORS.walkIn,
    },
    {
      name: "Insta",
      value: { week: 0, month: 0, year: 0 },
      fill: COLORS.insta,
    },
    { name: "WB", value: { week: 0, month: 0, year: 0 }, fill: COLORS.wb },
    { name: "FB", value: { week: 0, month: 0, year: 0 }, fill: COLORS.fb },
    {
      name: "Meta AD",
      value: { week: 0, month: 0, year: 0 },
      fill: COLORS.metaAd,
    },
    { name: "Camp", value: { week: 0, month: 0, year: 0 }, fill: COLORS.camp },
  ]); // Initialize state for chart data with default values

  const [period, setPeriod] = useState(PERIODS[0]); // Default period
  const [animationActive, setAnimationActive] = useState(false);

  // Fetch data from the Google Apps Script web app with retry logic and abort handling
  const fetchData = async (
    retries = 1,
    abortController = new AbortController()
  ) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx7y2jDTv9nhvA0n4gcpxxBZ_mkZ54e06whrvkswLbMMesKitT0vyvK94Fvf7yUiMLs/exec",
        { signal: abortController.signal } // Adding signal from AbortController
      ); // Google Apps Script URL

      // Check if response is okay
      if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Update the state with the fetched data
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: {
            week: result.find((d) => d.name === item.name)?.value.week || 0,
            month: result.find((d) => d.name === item.name)?.value.month || 0,
            year: result.find((d) => d.name === item.name)?.value.year || 0,
          },
        }))
      );
    } catch (error) {
      // If an AbortError occurs, don't retry
      if (error.name === "AbortError") {
        console.warn("Fetch aborted:", error);
      } else {
        console.error("Failed to fetch data:", error);

        // Retry once if error occurs
        if (retries > 0) {
          console.log("Retrying fetch...");
          setTimeout(() => fetchData(retries - 1, abortController), 2000); // Retry after 2 seconds
        } else {
          console.log("Fetching failed. Displaying previous data.");
        }
      }
    }
  };

  // Effect to set up polling every 10 seconds
  useEffect(() => {
    const abortController = new AbortController(); // Create an AbortController for this request
    fetchData(1, abortController); // Initial fetch

    const intervalId = setInterval(() => {
      // Abort previous request before fetching new data
      abortController.abort();
      fetchData(1, new AbortController()); // Start new fetch with a fresh controller
    }, 10000); // Fetch data every 10 seconds

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      abortController.abort(); // Abort any ongoing requests
    };
  }, []);

  // Effect to handle animation
  useEffect(() => {
    setAnimationActive(true);
    const timer = setTimeout(() => {
      setAnimationActive(false);
    }, 500);

    return () => {
      clearTimeout(timer); // Cleanup on unmount
    };
  }, [period]);

  return (
    <Spring className="card flex flex-col gap-4 p-5 h-[392px] xs:p-6 md:h-full">
      <div className="flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between md:flex-col md:items-stretch lg:flex-row lg:items-center">
        <h2>Visits by Source</h2>
        <div className="min-w-[105px]">
          <Select value={period} onChange={setPeriod} options={PERIODS} />
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%" id="visitsBySource">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 10, bottom: 0 }}
            layout="vertical"
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              dx={-10}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar
              dataKey={`value.${period.value}`} // Ensure the dataKey matches the period's value
              isAnimationActive={animationActive}
              maxBarSize={24}
              radius={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default VisitsBySource;
