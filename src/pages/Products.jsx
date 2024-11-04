import { useState, useEffect } from "react";
import AppBar from "@components/AppBar";
import AppGrid from "@components/AppGrid";
import StatsOverview from "@widgets/StatsOverview";
import AmountDivision1 from "@widgets/AmountDivision1";
import SalesByCategoryRadialBar from "@widgets/SalesByCategoryRadialBar";
import { useWindowSize } from "react-use";
import Loader from "@components/Loader"; // Import the Loader component

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyLL5IapzTnNJ67tRiuRvDcje6PNcYN_Qbc8KWwvA0D6S_a5dbc4XgRiuG8LNhjX7IT/exec"; // Replace with your Web App URL

const Products = () => {
  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // loading set to true initially
  const { width } = useWindowSize();
  const [view, setView] = useState("list");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    if (width >= 1280 && view === "list") {
      setMenuOpen(true);
    }
  }, [view, width]);

  useEffect(() => {
    // Fetch data from Google Sheets
    const fetchData = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const result = await response.json();
        setData(result);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // If loading, display the Loader component
  if (loading) {
    return <Loader />; // Display Loader while data is loading
  }

  // If data is successfully loaded, define widgets and render them
  const widgets = {
    stats_overview_a: <StatsOverview title="Today Sales" data={data.a} />,
    stats_overview_b: <StatsOverview title="Total Sales" data={data.b} />,
    profit: <SalesByCategoryRadialBar />,
  };

  return (
    <>
      <AppBar title="AIMS Sales Dashboard" onLogout={handleLogout} />
      <AppGrid id="dashboard_c" widgets={widgets} />
      <AmountDivision1 />
    </>
  );
};

export default Products;
