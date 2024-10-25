import Spring from "@components/Spring";
import BasicTable from "@components/BasicTable";
import TopSellingCollapse from "@components/TopSellingCollapse";

// hooks
import { useWindowSize } from "react-use";
import { useState, useEffect } from "react";

// constants
import { TOP_SELLING_COLUMN_DEFS } from "@constants/columnDefs";

// data placeholder
// import top_selling from "@db/top_selling";

const fetchTopSellingData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwLgkAE7ncy8Tb6lk3RtlMyo-G3_AORU8ePAnrUhUwpFFeYVgzJa5oRMbds0MJ_OE1Vzw/exec"
    ); // Replace with your actual Google Apps Script URL
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top selling data:", error);
    return [];
  }
};

const TopSelling = () => {
  const { width } = useWindowSize();
  const [activeCollapse, setActiveCollapse] = useState("");
  const [topSellingData, setTopSellingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Google Sheets
    const fetchData = async () => {
      const data = await fetchTopSellingData();
      if (data) {
        setTopSellingData(data);
        setLoading(false);
      }
    };

    fetchData();

    // Polling mechanism to check for data availability
    const interval = setInterval(() => {
      if (topSellingData) {
        setLoading(false); // Data is available, stop loading
        clearInterval(interval); // Clear the interval
      }
    }, 5000); // Poll every 100ms to check for data

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [topSellingData]);

  useEffect(() => {
    const handleResize = () => {
      setActiveCollapse("");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <Spring className="card flex flex-col gap-4 p-5 xs:p-6 h-full">
      <h2>Transaction Details</h2>
      {width < 768 ? (
        <div className="flex flex-col gap-4">
          {topSellingData.map((product, index) => (
            <TopSellingCollapse
              key={index}
              product={product}
              active={activeCollapse}
              setActive={setActiveCollapse}
              index={index}
            />
          ))}
        </div>
      ) : (
        <BasicTable
          dataSource={topSellingData}
          columns={TOP_SELLING_COLUMN_DEFS}
          scroll={{ y: 230 }}
          rowKey="id"
          showSorterTooltip={false}
          pagination={false}
        />
      )}
    </Spring>
  );
};

export default TopSelling;
