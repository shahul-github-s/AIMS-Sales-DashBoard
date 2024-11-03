import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@components/AppBar";
import AppGrid from "@components/AppGrid";
import Statistics from "@widgets/Statistics";
import SalesAnalyticsArea from "@widgets/SalesAnalyticsArea";
import SalesByCategory from "@widgets/SalesByCategory";
import VisitsBySource from "@widgets/VisitsBySource";
import OrderStatuses from "@widgets/OrderStatuses";
import FailedOrders from "@widgets/FailedOrders";
import OrdersTable from "@widgets/OrdersTable";
import ServiceTable from "@widgets/ServiceTable";
import ServiceCatagory from "@widgets/ServiceCatagory";
import ServiceCatagorySales from "@widgets/ServiceCatagorySales";
import SignIn from "./SignIn";
import ProfitBars from "@widgets/ProfitBars";

const widgets = {
  statistics: <Statistics />,
  sales_analytics: <SalesAnalyticsArea />,
  sales_by_category: <SalesByCategory />,
};
const widget = {
  profit: <ProfitBars />,
  visits: <VisitsBySource />,
};

const DashboardA = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages

  // Check authentication status on initial render
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle logout (e.g., from a logout button or menu item)
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  if (!isAuthenticated) {
    return <SignIn setIsAuthenticated={setIsAuthenticated} />;
  }

  const handleExport = async () => {
    const exportUrl =
      "https://script.google.com/macros/s/AKfycbwHiDzRQxCge6m-a0Wk1O0QTZZBm-au-mZkP-1Al1jWeSN5ECyuUR39puBuxE9nKtKY/exec"; // Replace with your Web App URL
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
    <>
      <AppBar title="AIMS Sales Dashboard" onLogout={handleLogout} />
      <AppGrid
        id="dashboard_a"
        widgets={widgets}
        cols={{ xl: 4, lg: 3, md: 2 }}
      />

      <AppGrid
        id="dashboard_c"
        widgets={widget}
        cols={{ xl: 4, lg: 3, md: 2 }}
      />
      <div className="layout-wrapper flex flex-col flex-1 gap-6 md:gap-8">
        <div className="grid grid-cols-1 gap-6 md:gap-8 3xl:grid-cols-2">
          <OrderStatuses />
          <FailedOrders />
        </div>
        <h2 className="Bold">Performance Review</h2>
        <ServiceCatagory />
        <OrdersTable />
        <h2>Sales Review</h2>
        <ServiceCatagorySales />
        <ServiceTable />
        <button
          className="btn btn--base h-[50px] px-5 gap-2"
          onClick={handleExport}
        >
          <i className="icon-arrow-down-to-line-regular text-[16px]" />
          Export
        </button>
      </div>
    </>
  );
};

export default DashboardA;
