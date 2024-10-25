import Logout from "@components/Logout"; // Adjust the import path accordingly
import Product from "@pages/Products";
import PaymentPendingForm from "@widgets/PaymentPendingForm";
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
    // {
    //   name: "Disposition Forms",
    //   icon: "square-list",
    //   links: [
    //     {
    //       path: "/PaymentPendingForm",
    //       name: "Payment Pendings",
    //       components: PaymentPendingForm,
    //     },
    // {
    //   path: "/order-details",
    //   name: "Order Details",
    // },
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
    // },
    // {
    //   name: "Pages",
    //   icon: "layer-group",
    //   links: [
    //     {
    //       path: "/sign-in",
    //       name: "Sign In",
    //     },
    //     {
    //       path: "/sign-up",
    //       name: "Sign Up",
    //     },
    //     {
    //       path: "/404",
    //       name: "Page 404",
    //     },
    //   ],
    // },
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
