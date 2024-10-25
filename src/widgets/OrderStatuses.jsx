import Spring from "@components/Spring";
import StatisticsNumber from "@components/StatisticsNumber";
import StatisticsNumber2 from "@components/StatisticsNumber2";
import { useState, useEffect, Fragment } from "react";

const OrderStatuses = () => {
  const [excess, setExcess] = useState([
    {
      icon: "square-list",
      value: 0, // Default value
      label: "Lead Count",
    },
  ]);

  const [data, setData] = useState([
    {
      icon: "square-fragile",
      value: 0, // Default value
      label: "Unsettled Amount",
    },
    {
      icon: "box-check",
      value: 0, // Default value
      label: "In Hand Cash",
    },
    {
      icon: "bars-progress",
      value: 0, // Default value
      label: "UPI Transaction",
    },
  ]);

  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reset error before fetching
        setError(null);

        // Fetch data
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxqlCvLzLqOTJJSB5hg3wJEhWAtb0CurkG-VkVvjfWSThcrxGtC_izLn8umbuSEFbyo/exec"
        );

        // Check if the response is OK (status 200)
        if (!response.ok) {
          // throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        // Validate data structure before setting the state
        if (responseData && responseData.excess && responseData.data) {
          setExcess([
            {
              icon: "cart-circle-xmark",
              value: responseData.excess.leadCount ?? 0, // Safe fallback to 0
              label: "Lead Count",
            },
          ]);

          setData([
            {
              icon: "square-fragile",
              value: responseData.data.unsettledAmount ?? 0, // Safe fallback to 0
              label: "Unsettled Amount",
            },
            {
              icon: "box-check",
              value: responseData.data.inHandCash ?? 0, // Safe fallback to 0
              label: "In Hand Cash",
            },
            {
              icon: "bars-progress",
              value: responseData.data.upiTransaction ?? 0, // Safe fallback to 0
              label: "UPI Transaction",
            },
          ]);
        } else {
          // If data structure is invalid
          // throw new Error("Invalid data structure received from the server.");
        }
      } catch (error) {
        // If any error occurs, log the error and retain previous state (no changes to UI)
        // console.error("Error fetching data:", error);
        // setError(error.message);
        // No update to state here, so it will continue showing the previous data or default 0 values.
      }
    };

    // Polling the data every 30 seconds
    const intervalId = setInterval(fetchData, 1000);

    // Fetch data initially
    fetchData();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Spring className="bg-turquoise md:h-[180px] rounded-[20px] p-5 xs:p-6">
      <p className="text-white text-[15px] font-semibold uppercase mb-2.5">
        Profit Tracker
      </p>

      {/* {error && <div className="text-red-500 mb-4">Error: {error}</div>} */}

      <div className="grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4 md:items-center md:gap-0">
        {excess.map((item, index) => (
          <Fragment key={item.label}>
            <StatisticsNumber2 index={index} data={excess} item={item} />
            {index !== excess.length - 1 && (
              <div className="h-[1px] bg-border md:hidden" />
            )}
          </Fragment>
        ))}
        {data.map((item, index) => (
          <Fragment key={item.label}>
            <StatisticsNumber index={index} data={data} item={item} />
            {index !== data.length - 1 && (
              <div className="h-[1px] bg-border md:hidden" />
            )}
          </Fragment>
        ))}
      </div>
    </Spring>
  );
};

export default OrderStatuses;
