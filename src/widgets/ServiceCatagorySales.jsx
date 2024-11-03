import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "@components/BasicTable";
import Pagination from "@ui/Pagination";
import Search from "@ui/Search";
import { useWindowSize } from "react-use";

const ServiceTable = () => {
  const { width } = useWindowSize();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    itemsPerPage: 10,
  });
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // State to hold error messages

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbw54o9lNhQfuxI8DBUMeuWGOVYJ8ukQnQK-9FXz5XSTkH9qsEINy6ZHzDVNRBH0j0nA/exec"
        );
        // console.log("Data fetched:", response.data); // Debugging line
        setData(response.data);
        setError(""); // Reset error state on successful fetch
      } catch (error) {
        // console.error("Error fetching data:", error);
        setError(
          "Failed to fetch data. Please check your network connection or try again later."
        ); // Set error message
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 1 second
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once

  const { currentPage, itemsPerPage } = pagination;
  const filteredData = data.filter((item) => {
    const serviceCategory = item["Service Category Report"];
    // console.log("Filtering serviceCategory:", serviceCategory); // Debugging line
    return (
      serviceCategory &&
      serviceCategory.toLowerCase().includes(query.toLowerCase())
    );
  });

  const totalItems = filteredData.length; // Update this line
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setPagination({ ...pagination, currentPage: page });
    }
  };

  const fixedValues = [
    "Ration Card",
    "Voter Id",
    "Aadhar Card",
    "Pan Card",
    "College Application",
    "License and RTO Services",
    "Money Transfer Services",
    "Counselling Apply",
    "TN Police",
    "TNEB",
    "Online Payments",
    "Dharisanam Bookings",
    "Typing Services",
    "MSME",
    "UDAY Scheme",
    "Income Certificate",
    "Community Certificate",
    "Nativity Certificate",
    "Intercaste Marriage Certificate",
    "Obc Certificate",
    "No Male Child Certificate",
    "First Graduate Certificate",
    "Small/Marginal Farmer Certificate",
    "Widow Certificate",
    "Deserted Women Certificate",
    "Disability Pension Scheme",
    "Widow Pension Scheme",
    "Deserted Women Pension Scheme",
    "Unmarried Women Pension Scheme",
    "Old Age Pension Scheme",
    "TN Employment Registration",
    "Government Job Application",
    "Passport",
    "Flight Ticket",
    "Visa",
    "Certificate Attestation",
    "Bus Booking",
    "Visa Stamping",
    "Cruise Booking",
    "Hotel Booking",
    "Medical Appointment",
    "Tour Services",
    "Outline",
    "General Services",
    "E-Sevai",
    "Job Application Support",
    "Travel Services",
  ];

  const columns = [
    {
      title: "Service Category Report",
      dataIndex: "Service Category Report",
      key: "Service Category Report",
      fixed: "left",
      render: (text) => (fixedValues.includes(text) ? text : ""),
    },
    ...(data.length > 0
      ? Object.keys(data[0] || {})
          .filter((key) => key !== "Service Category Report")
          .map((key) => ({
            title: key.trim(),
            dataIndex: key.trim(),
            key: key.trim(),
          }))
      : []),
  ];

  const handleExport = async () => {
    const exportUrl =
      "https://script.google.com/macros/s/AKfycbz9LtMO7abcJnkmBzHekCBwXcsGF42hCMPldFi0RnDOh1NoY5xci-e5FKnD_TJ-RDNI/exec"; // Replace with your Web App URL
    try {
      const response = await axios.get(exportUrl);
      // console.log("Export response:", response.data); // Debugging line
      const { url } = response.data;
      if (url) {
        window.open(url, "_blank");
      } else {
        // console.error("No URL returned for export");
      }
    } catch (error) {
      // console.error("Error exporting file:", error);
      setError("Failed to export the file. Please try again later."); // Set export error message
    }
  };

  return (
    <div className="orders-table">
      <div className="flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6">
        {/* {error && (
          <div className="error-message text-red-500 mb-4">
            {error} Display error message 
          </div> 
        )} */}
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
          dataSource={paginatedData}
          rowKey="Service Category Report"
          pagination={false}
          scroll={{ x: "max-content" }}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={totalItems} // Use filteredData for pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ServiceTable;
