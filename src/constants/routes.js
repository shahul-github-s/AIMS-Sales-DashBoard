import Logout from "@components/Logout"; // Adjust the import path accordingly
import Product from "@pages/Products";

const ROUTES = {
  main: [
    {
      name: "Sales Analytics",
      icon: "objects-column",
      // notifications: 2,
      links: [
        {
          path: "/",
          name: "Performance Overview",
        },
        // {
        //   path: "/dashboard-b",
        //   name: "Dashboard B",
        // },
        // {
        //   path: "/dashboard-c",
        //   name: "Lead Status",
        // },
        // {
        //   path: "/dashboard-d",
        //   name: "Service Unit Report",
        // },
      ],
    },
    {
      name: "Cash Details",
      icon: "bag-shopping",
      links: [
        {
          path: "/products",
          name: "In Hand Cash",
          component: Product,
        },
        // {
        //   path: "/product",
        //   name: "Product Page",
        // },
        // {
        //   path: "/create-product",
        //   name: "Create Product",
        // },
      ],
    },
    {
      name: "Team Productivity",
      // icon: "square-list",
      icon: "badge-percent",

      links: [
        {
          path: "/order-details",
          name: "Performance",
        },
        // {
        //   path: "/invoice",
        //   name: "Invoice",
        // },
        //   ],
        // },
        // {
        //   path: "/sales",
        //   name: "Sales",
        //   icon: "badge-percent",
        // },
        // {
        //   path: "/reviews",
        //   name: "Reviews",
        //   icon: "message-quote",
      ],
    },
    {
      name: "Disposition Form",
      icon: "layer-group",
      links: [
        // {
        //   path: "/sign-in",
        //   name: "Sign In",
        // },
        {
          path: "/create-product",
          name: "Daily Expenses",
        },
        // {
        //   path: "/404",
        //   name: "Page 404",
        // },
      ],
    },
  ],

  secondary: [
    // {
    //   path: "/settings",
    //   name: "Settings",
    //   icon: "gear",
    // },
    {
      path: "/logout",
      name: "Logout",
      icon: "arrow-right-from-bracket",
      component: Logout, // Use the Logout component for this route
    },
  ],
};

export default ROUTES;
