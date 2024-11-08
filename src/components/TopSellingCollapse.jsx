// components
import Spring from "@components/Spring";
import Collapse from "@mui/material/Collapse";
import TopSellingProductItem from "@components/TopSellingProductItem";

// constants
// import { PRODUCT_STATUSES } from "@constants/options";

// utils
import PropTypes from "prop-types";

const TopSellingCollapse = ({ product, active, setActive, index }) => {
  // const status = PRODUCT_STATUSES.find((item) => item.value === product.status);

  const toggleCollapse = () => {
    setActive(active === product.id ? "" : product.id);
  };

  return (
    <Spring
      className="card-container card-container--light p-4 rounded-2xl"
      type="slideUp"
      index={index}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <TopSellingProductItem
          titleClass="truncate max-w-full"
          subtitleClass="truncate max-w-full"
          product={product}
        />
        <button
          className={`btn-collapse ${active === product.id ? "active" : ""}`}
          onClick={toggleCollapse}
          aria-label="Toggle"
        >
          <i
            className={`icon-chevron-${
              active === product.id ? "up" : "down"
            }-regular`}
          />
        </button>
      </div>
      <Collapse in={active === product.id}>
        <ul className="flex flex-col gap-2 mt-4">
          {/* <li className="flex items-center justify-between pb-2 border-b">
            <span className="uppercase text-label text-xs font-medium">
              Revenue :
            </span>
            <span className="text-header font-semibold">
              ₹{product.revenue}
            </span>
          </li>
          <li className="flex items-center justify-between pb-2 border-b">
            <span className="uppercase text-label text-xs font-medium">
              Profit :
            </span>
            <span className="text-header font-semibold">₹{product.profit}</span>
          </li> */}

          <li className="flex items-center justify-between">
            <span className="uppercase text-label text-xs font-medium">
              Expenses:
            </span>
            <span className="text-header font-semibold">
              ₹{product.expenses || 0}
            </span>
          </li>
        </ul>
      </Collapse>
    </Spring>
  );
};

TopSellingCollapse.propTypes = {
  product: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TopSellingCollapse;
