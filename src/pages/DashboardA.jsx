import { useState, useEffect } from "react";
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
      </div>
    </>
  );
};

export default DashboardA;
