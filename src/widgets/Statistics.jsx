import React, { useState, useEffect } from "react";
import StatisticsCard from "@components/StatisticsCard";

const DashAnalytics = () => {
  const [googleSheetData, setGoogleSheetData] = useState({
    todayRevenue: { value: 0, trend: 0 },
    todayVisitors: { value: 0, trend: 0 },
    todayProfit: { value: 0, trend: 0 },
    totalExpenses: { value: 0, trend: 0 },
  });

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchGoogleSheetData = async () => {
    try {
      setIsFetching(true); // Start fetching data
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzcTBjYrTZX4AWvr48Z9fBfB-yXj1kamlBk2sxeEAgPHpTb44MgopWAE1sPDovlGEY/exec"
      );
      if (!response.ok) {
        // throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Only update state if the fetched data is different
      if (JSON.stringify(data) !== JSON.stringify(googleSheetData)) {
        setGoogleSheetData(data);
      }

      setIsFetching(false); // Finished fetching data
      setError(null); // Clear any previous error
    } catch (error) {
      // console.error("Error fetching Google Sheets data:", error);
      setError(error.message); // Set the error message
      setIsFetching(false); // Stop fetching, but do not reset data
    }
  };

  useEffect(() => {
    fetchGoogleSheetData();

    const interval = setInterval(() => {
      fetchGoogleSheetData();
    }, 100);

    return () => clearInterval(interval);
  }, [googleSheetData]); // Add googleSheetData as a dependency

  const { todayRevenue, todayVisitors, todayProfit, totalExpenses } =
    googleSheetData;

  const data = [
    {
      title: "Today Sales",
      iconClass: "wallet-solid",
      value: todayRevenue.value,
      valuePrefix: "₹",
      trend: todayRevenue.trend,
    },
    {
      title: "Today Visitors",
      iconClass: "user-plus-solid",
      value: todayVisitors.value,
      valuePrefix: "",
      trend: todayVisitors.trend,
    },
    {
      title: "Today Profit",
      iconClass: "arrow-down-to-line-solid",
      value: todayProfit.value,
      valuePrefix: "₹",
      trend: todayProfit.trend,
    },
    {
      title: "Total Expenses",
      iconClass: "bag-shopping-solid",
      value: totalExpenses.value,
      valuePrefix: "₹",
      trend: totalExpenses.trend,
    },
  ];

  return (
    <div className="grid grid-cols-1 h-full gap-6 md:grid-cols-2 xl:gap-8 3xl:grid-cols-4">
      {data.map((item, index) => (
        <StatisticsCard
          key={index}
          data={item}
          chartClass="xl:w-[250px] 3xl:hidden min-[1800px]:block min-[1800px]:w-[110px] 5xl:w-[130px]"
        />
      ))}
      {isFetching && <div>{/* Fetching latest data... */}</div>}
      {error && (
        <div style={{ color: "red" }}>
          {/* Error: {error}. Showing previous data. */}
        </div>
      )}
    </div>
  );
};

export default DashAnalytics;
