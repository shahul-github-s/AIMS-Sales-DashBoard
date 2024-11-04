import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const FailedOrders = () => {
  const defaultData = [
    { icon: "arrow-right-arrow-left", value: 0, label: "Order 1" },
    { icon: "arrow-right-arrow-left", value: 0, label: "Order 2" },
    { icon: "square-list", value: 0, label: "Order 3" },
    { icon: "square-list", value: 0, label: "Order 4" },
  ];

  const [data, setData] = useState(defaultData); // Initialize with default data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxpizx2j_pXlpZRhrW393vPJayMUyr7XdrQV02ODWAFhMXSBpa4PTTMt_gdosXSztgE/exec"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const sheetData = await response.json();

        // Update the state with new data, keeping previous labels
        setData((prevData) => [
          {
            icon: "arrow-right-arrow-left",
            value:
              sheetData.order1.value !== undefined
                ? sheetData.order1.value
                : prevData[0].value,
            label: sheetData.order1.label || prevData[0].label,
          },
          {
            icon: "arrow-right-arrow-left",
            value:
              sheetData.order2.value !== undefined
                ? sheetData.order2.value
                : prevData[1].value,
            label: sheetData.order2.label || prevData[1].label,
          },
          {
            icon: "square-list",
            value:
              sheetData.order3.value !== undefined
                ? sheetData.order3.value
                : prevData[2].value,
            label: sheetData.order3.label || prevData[2].label,
          },
          {
            icon: "square-list",
            value:
              sheetData.order4.value !== undefined
                ? sheetData.order4.value
                : prevData[3].value,
            label: sheetData.order4.label || prevData[3].label,
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);
    fetchData(); // Fetch data immediately on component mount
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <Spring className="bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6">
      <p className="text-white text-[15px] font-semibold uppercase mb-2.5">
        Top Rank
      </p>
      <div className="grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0">
        {data.map((item, index) => (
          <Fragment key={item.label}>
            <StatisticsNumber item={item} index={index} data={data} />
            {index !== data.length - 1 && (
              <div className="h-[1px] bg-border md:hidden" />
            )}
          </Fragment>
        ))}
      </div>
    </Spring>
  );
};

export default FailedOrders;
