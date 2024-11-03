import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "@components/BasicTable";
import Search from "@ui/Search";
import { useWindowSize } from "react-use";

const ServiceTable = () => {
  const { width } = useWindowSize();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // State to hold error messages

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbwM9fZTVXJVbnfNKfBjZkjAR0OQON27vr-XJzl74krw7YNGm__Zb8LamykxhygLRTui/exec"
        );
        setData(response.data);
        setError(""); // Reset error state on successful fetch
      } catch (error) {
        setError(
          "Failed to fetch data. Please check your network connection or try again later."
        );
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 1 second
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fixedValues = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
    "Day 11",
    "Day 12",
    "Day 13",
    "Day 14",
    "Day 15",
    "Day 16",
    "Day 17",
    "Day 18",
    "Day 19",
    "Day 20",
    "Day 21",
    "Day 22",
    "Day 23",
    "Day 24",
    "Day 25",
    "Day 26",
    "Day 27",
    "Day 28",
    "Day 29",
    "Day 30",
    "Day 31",
    "Total",
  ];

  const columns = [
    {
      title: "Performance",
      dataIndex: "Performance",
      key: "Performance",
      fixed: "left",
      render: (text) => (fixedValues.includes(text) ? text : ""),
    },
    ...(data.length > 0
      ? Object.keys(data[0] || {})
          .filter((key) => key !== "Performance")
          .map((key) => ({
            title: key.trim(),
            dataIndex: key.trim(),
            key: key.trim(),
          }))
      : []),
  ];

  const filteredData = data.filter((item) => {
    const serviceCategory = item["Performance"];
    return (
      serviceCategory &&
      serviceCategory.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleExport = async () => {
    const exportUrl =
      "https://script.google.com/macros/s/AKfycbxzvEcbC38UG2gDvb1gpSz8bzAJWcnIlcHgZgAX3aA8dGfhsbqWuzcltqnKGp7ARbYD/exec";
    try {
      const response = await axios.get(exportUrl);
      const { url } = response.data;
      if (url) {
        window.open(url, "_blank");
      }
    } catch (error) {
      setError("Failed to export the file. Please try again later.");
    }
  };

  return (
    <div className="orders-table">
      <div className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6">
        {error && (
          <div className="error-message text-red-500 mb-4">{error}</div>
        )}
        <div className="flex flex-col gap-4 md:flex-row">
          <Search
            wrapperClass="flex-1"
            value={query}
            onChange={setQuery}
            placeholder="Search for Service..."
          />
          <button
            className="btn btn--base h-[50px] px-5 gap-2"
            onClick={handleExport}
          >
            <i className="icon-arrow-down-to-line-regular text-[16px]" />
            Export
          </button>
        </div>

        <BasicTable
          columns={columns}
          dataSource={filteredData} // Display all filtered data without pagination
          rowKey="Performance"
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default ServiceTable;
