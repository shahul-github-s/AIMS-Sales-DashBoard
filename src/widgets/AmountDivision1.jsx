import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "@components/BasicTable";

const ServiceDataTable = ({ title, data, columns, handleExport }) => (
  <div
    className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6"
    style={{ width: "348px", alignSelf: "flex-start" }}
  >
    <h3 className="font-semibold">{title}</h3>
    <BasicTable
      columns={columns}
      dataSource={data}
      rowKey={(record) => record["Service Unit"] || record.id}
      pagination={false}
      scroll={{ x: "max-content" }}
      style={{ width: "348px" }}
    />
    {title === "Daily Expenses" && (
      <button
        className="btn btn--base h-[50px] px-5 gap-2 font-semibold"
        onClick={handleExport}
        style={{ width: "348px" }}
      >
        <i className="icon-arrow-down-to-line-regular text-[16px]" />
        Export
      </button>
    )}
  </div>
);

const ServiceTable = () => {
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get(
            "https://script.google.com/macros/s/AKfycbwigQLYlCOaR4ZiiEd5MU4ldgNt5jypMqVQEKwT880PpXZ8sP56qDAG_AFHRzsekK9L/exec"
          ),
          axios.get(
            "https://script.google.com/macros/s/AKfycbz89ZtL8jdRkKlfemayAw_sSIswn0XRCxQrRLu_RMX3JpyaXsaqcW-WcihtQWqWUJ0t/exec"
          ),
          axios.get(
            "https://script.google.com/macros/s/AKfycbx35bi8yBi7ZJFJkbHDTWropoHvHenbkXAHU7X_TZP4Ot3X4INMuxu60EV0VMyq3okg/exec"
          ),
        ]);
        setData1(response1.data.slice(1));
        setData2(response2.data.slice(1));
        setData3(response3.data.slice(1));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleExport = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://script.google.com/...");
      const { url } = response.data;
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error exporting file:", error);
    } finally {
      setLoading(false);
    }
  };

  const getColumns = () => {
    if (!data1.length) return [];

    return [
      {
        title: "Service Unit",
        dataIndex: "Service Unit",
        key: "Service Unit",
        render: (text) => (
          <span
            className={
              text === "Sub Division - 1" || text === "Final Total Amount"
                ? "font-bold"
                : ""
            }
          >
            {text}
          </span>
        ),
      },
      ...Object.keys(data1[0] || { "Default Column": "" })
        .filter((key) => key !== "Service Unit")
        .map((key) => ({
          title: key.trim(),
          dataIndex: key.trim(),
          key: key.trim(),
        })),
    ];
  };

  return (
    <div
      className="orders-table"
      style={{
        display: "flex",
        gap: "1px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* {error ? <p>{error}</p> : null} */}
      {data1.length > 0 && (
        <ServiceDataTable
          title="Business Revenue - Net Cafe"
          data={data1}
          columns={getColumns()}
        />
      )}
      {data2.length > 0 && (
        <ServiceDataTable
          title="Business Revenue - Travel"
          data={data2}
          columns={getColumns()}
        />
      )}
      {data3.length > 0 && (
        <ServiceDataTable
          title="Daily Expenses"
          data={data3}
          columns={getColumns()}
          handleExport={handleExport}
        />
      )}
    </div>
  );
};

export default ServiceTable;
