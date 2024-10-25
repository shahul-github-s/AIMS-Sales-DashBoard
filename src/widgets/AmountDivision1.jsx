import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "@components/BasicTable"; // Assuming this is your table component

const ServiceTable = () => {
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [query, setQuery] = useState("");
  const [isFetching, setIsFetching] = useState(false); // State to manage fetching status

  useEffect(() => {
    const fetchData = async () => {
      if (isFetching) return; // Prevent duplicate fetches
      setIsFetching(true); // Set fetching state to true

      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get(
            "https://script.google.com/macros/s/AKfycbxhzZr1Vb96aRGqdA3zs85kxwBeXVyQe3vmy0Y3Z6W2_msvcmK8stfnMmyOC_5iJ-VD/exec"
          ),
          axios.get(
            "https://script.google.com/macros/s/AKfycbwkQ6SUU6hGswD9_TtVxVGsEF7fjMGp0jQqER5ltShOTEeDnZeKnyguGH9nhRW2YXXu/exec"
          ),
          axios.get(
            "https://script.google.com/macros/s/AKfycbzT_Ht9bSPPUgTst929g7QqesK1oECNAm05toweWJY82EDnc199_f28Nk_ffyU6E1DU/exec"
          ),
        ]);

        // Assuming the first row contains headers, we slice it off
        setData1(response1.data.slice(1));
        setData2(response2.data.slice(1));
        setData3(response3.data.slice(1));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsFetching(false); // Reset fetching state
      }
    };

    // Set up interval to fetch data every 1 second (adjust to 10 ms if needed, but be cautious)
    const intervalId = setInterval(fetchData, 10);

    // Initial fetch when the component mounts
    fetchData();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isFetching]); // Add isFetching as a dependency to ensure it updates correctly

  const handleExport = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycbwYT992tPEnN1koQoofQx6virM-eYu8GfuUry6j11qUV87AHH4betrLOTLJRJ0Yn8MC/exec"
      );
      const { url } = response.data;
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error exporting file:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filtering data logic
  const filteredData1 = data1.filter((item) =>
    item?.["Service Unit"]?.toLowerCase().includes(query.toLowerCase())
  );
  const filteredData2 = data2.filter((item) =>
    item?.["Service Unit"]?.toLowerCase().includes(query.toLowerCase())
  );
  const filteredData3 = data3.filter((item) =>
    item?.["Service Unit"]?.toLowerCase().includes(query.toLowerCase())
  );

  const fixedValues = [
    "General Service",
    "E-Sevai",
    "Job Application Support",
    "Pan Card",
    "Browsing",
    "KVB Bank Debited Amount",
    "HDFC Bank Debited Amount",
    "Yesterday Hand Cash - General",
    "Yesterday Hand Cash - Travel",
    "Sub Division - 1",
    "Daily Expenses",
    "Repay",
    "Bank Deposit - General",
    "UPI - General",
    "Bank Deposit - Travel",
    "UPI - Travel",
    "Final Total Amount",
    "Flight Ticket",
    "Refai Account",
    "Anees Account",
    "Money Transfer Services",
    "Travel Services",
    "AePS",
    "Referral Amount",
    "Staffs Accommodation",
    "Staffs Necessary",
    "Office Utilities",
  ];

  const getColumns = () => {
    if (!data1.length) return []; // Avoid trying to generate columns if no data

    return [
      {
        title: "Service Unit",
        dataIndex: "Service Unit",
        key: "Service Unit",
        render: (text) => {
          return fixedValues.includes(text) ? (
            <span
              className={
                text === "Sub Division - 1" || text === "Final Total Amount"
                  ? "font-bold"
                  : ""
              }
            >
              {text}
            </span>
          ) : (
            ""
          );
        },
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
        alignItems: "flex-start", // Prevent vertical stretching
      }}
    >
      {/* Table 1 */}
      {filteredData1.length > 0 && (
        <div
          className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6"
          style={{ alignSelf: "flex-start" }}
        >
          <h3 className="font-semibold">Business Revenue - Net Cafe</h3>
          <BasicTable
            columns={getColumns()}
            dataSource={filteredData1}
            rowKey={(record) => record["Service Unit"] || record.id}
            pagination={false}
            scroll={{ x: "max-content" }}
            style={{ width: "348px" }} // Keep fixed width
          />
        </div>
      )}

      {/* Table 2 */}
      {filteredData2.length > 0 && (
        <div
          className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6"
          style={{ width: "348px", alignSelf: "flex-start" }}
        >
          <h3 className="font-semibold">Business Revenue - Travel</h3>
          <BasicTable
            columns={getColumns()}
            dataSource={filteredData2}
            rowKey={(record) => record["Service Unit"] || record.id}
            pagination={false}
            scroll={{ x: "max-content" }}
            style={{ width: "348px" }} // Keep fixed width
          />
        </div>
      )}

      {/* Table 3 */}
      {filteredData3.length > 0 && (
        <div
          className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6"
          style={{ width: "348px", alignSelf: "flex-start" }}
        >
          <h3 className="font-semibold">Daily Expenses</h3>
          <BasicTable
            columns={getColumns()}
            dataSource={filteredData3}
            rowKey={(record) => record["Service Unit"] || record.id}
            pagination={false}
            scroll={{ x: "max-content" }}
            style={{ width: "348px" }} // Keep fixed width
          />
          <button
            className="btn btn--base h-[50px] px-5 gap-2 font-semibold"
            onClick={handleExport}
            style={{ width: "348px" }}
          >
            <i className="icon-arrow-down-to-line-regular text-[16px]" />
            Export
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceTable;
