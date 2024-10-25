import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const FailedOrders = () => {
  const [data, setData] = useState([
    { icon: "arrow-right-arrow-left", value: 0, label: "Order 1" },
    { icon: "arrow-right-arrow-left", value: 0, label: "Order 2" },
    { icon: "square-list", value: 0, label: "Order 3" },
    { icon: "square-list", value: 0, label: "Order 4" },
  ]); // Start with default data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwjzkGFpw_52ulSmnoupvg8TER3GAREuWUl7QNQr5tNZUSOiEnDuMMdPYSv_C9O3Nz0/exec"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const sheetData = await response.json();

        // Validate if sheetData and its orders exist before updating the state
        if (
          sheetData &&
          sheetData.order1 &&
          sheetData.order2 &&
          sheetData.order3 &&
          sheetData.order4
        ) {
          setData([
            {
              icon: "arrow-right-arrow-left",
              value: sheetData.order1.value || 0, // Safeguard in case value is missing
              label: sheetData.order1.label || "Order 1", // Default label if missing
            },
            {
              icon: "arrow-right-arrow-left",
              value: sheetData.order2.value || 0,
              label: sheetData.order2.label || "Order 2",
            },
            {
              icon: "square-list",
              value: sheetData.order3.value || 0,
              label: sheetData.order3.label || "Order 3",
            },
            {
              icon: "square-list",
              value: sheetData.order4.value || 0,
              label: sheetData.order4.label || "Order 4",
            },
          ]);
        } else {
          console.error("Invalid data structure from the API", sheetData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Retry mechanism can be added here if needed
      }
    };

    // Start polling every 10 seconds (10000 milliseconds)
    const intervalId = setInterval(fetchData, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Spring className="bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6">
      <p className="text-white text-[15px] font-semibold uppercase mb-2.5">
        Top Rank
      </p>
      <div
        className="grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4
                 md:items-center md:gap-0"
      >
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
