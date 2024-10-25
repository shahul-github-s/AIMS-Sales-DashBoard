// components
import AppBar from "@components/AppBar";
import FilterMenu from "@components/FilterMenu";
import ProductsDisplay from "@widgets/ProductsDisplay";
import Loader from "@components/Loader";
import AmountDivision1 from "@widgets/AmountDivision1";

// hooks
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

const Products = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [view]);
  // Handle logout (e.g., from a logout button or menu item)
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };
  return (
    <>
      {/* <header>hello</header> */}
      <AppBar title="AIMS Sales Dashboard" onLogout={handleLogout} />
      {/* <h2>Amount Division - 1</h2> */}
      <AmountDivision1 />
    </>
  );
};

export default Products;
