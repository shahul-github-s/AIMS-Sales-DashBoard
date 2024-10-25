// components
import Spring from "@components/Spring";
import { Helmet } from "react-helmet";

// Import PNG images
// import LogoLight from "@assets/logo-alt-light.png";
// import LogoDark from "@assets/AIMS-name.png";

// utils
import PropTypes from "prop-types";

const AuthLayout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>AIMS Sales Report</title>
      </Helmet>
      <div className="flex flex-col flex-1 justify-center items-center">
        <Spring
          className="bg-widget rounded-[20px] w-full p-5 xs:p-6 md:p-20"
          type="slideUp"
        >
          <div className="flex flex-col items-center text-center mb-6">
            {/* Use img tags to display the PNG logos */}
            {/* <img
              src={LogoLight}
              alt="Logo Light"
              className="w-[70px] h-[70px] dark:hidden"
            /> */}
            {/* <img
              src={LogoDark}
              alt="Logo Dark"
              className="w-[100px] h-[100px] hidden dark:block"
            /> */}
            <h1 className="mt-4 mb-2">AIMS</h1>
            <p className="max-w-[220px] text-label">Sales Analytics</p>
          </div>
          {children}
        </Spring>
      </div>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthLayout;
