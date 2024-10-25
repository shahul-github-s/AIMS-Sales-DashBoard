// GA
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Logout from "./pages/Logout"; // Update the path if necessary

// utils
import { lazy, Suspense } from "react";

// styles
import "@styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import "react-grid-layout/css/styles.css";
import ThemeStyles from "@styles/theme";

// fonts
import "@fonts/icomoon/style.css";
import "@fonts/icomoon/icomoon.woff";

// contexts
import { SidebarProvider } from "@contexts/sidebarContext";
import { ThemeProvider } from "styled-components";

// hooks
import { useTheme } from "@contexts/themeContext";
import useAuthRoute from "@hooks/useAuthRoute";

// components
import { Route, Routes, Navigate } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@components/ScrollToTop";
import Sidebar from "@components/Sidebar";
import Loader from "@components/Loader";

// lazy load
const DashboardA = lazy(() => import("@pages/DashboardA"));
const DashboardB = lazy(() => import("@pages/DashboardB"));
const DashboardC = lazy(() => import("@pages/DashboardC"));
const DashboardD = lazy(() => import("@pages/DashboardD"));
const Products = lazy(() => import("@pages/Products"));
const Product = lazy(() => import("@pages/Product"));
const CreateProduct = lazy(() => import("@pages/CreateProduct"));
const Orders = lazy(() => import("@pages/Orders"));
const OrderDetails = lazy(() => import("@pages/OrderDetails"));
const Invoice = lazy(() => import("@pages/Invoice"));
const Sales = lazy(() => import("@pages/Sales"));
const Reviews = lazy(() => import("@pages/Reviews"));
const Settings = lazy(() => import("@pages/Settings"));
const SignIn = lazy(() => import("@pages/SignIn"));
const SignUp = lazy(() => import("@pages/SignUp"));
const PageNotFound = lazy(() => import("@pages/PageNotFound"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null to indicate loading state
  const isAuthRoute = useAuthRoute();
  const { theme } = useTheme();

  // Check authentication status on initial render
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  // Google Analytics init
  const gaKey = import.meta.env.VITE_GA;
  gaKey && ReactGA.initialize(gaKey);

  // Show a loader until the authentication state is resolved
  if (isAuthenticated === null) {
    return <Loader />; // You can use any loading spinner here
  }

  return (
    <SidebarProvider>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <ToastContainer theme={{ theme: theme }} autoClose={2000} />
        <ScrollToTop />
        <div className={`app ${isAuthRoute ? "fluid" : ""}`}>
          {!isAuthRoute && <Sidebar />}
          <div
            className={`flex flex-col col-start-2 flex-1 ${
              isAuthRoute ? "max-w-[650px] w-full" : ""
            }`}
          >
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      <DashboardA setIsAuthenticated={setIsAuthenticated} />
                    ) : (
                      <Navigate to="/sign-in" />
                    )
                  }
                />
                <Route path="/dashboard-b" element={<DashboardB />} />
                <Route path="/dashboard-c" element={<DashboardC />} />
                <Route path="/dashboard-d" element={<DashboardD />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product" element={<Product />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order-details" element={<OrderDetails />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/sign-in"
                  element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                  path="/logout"
                  element={<Logout setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
};

export default App;
