// components
import PropTypes from "prop-types";

const TopSellingProductItem = ({ product, titleClass }) => {
  return (
    <div className="flex flex-col items-start">
      <span
        className={`font-medium text-[15px] text-header hover:text-turquoise ${
          titleClass || ""
        }`}
      >
        {product.name}
      </span>
    </div>
  );
};

TopSellingProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  titleClass: PropTypes.string,
};

export default TopSellingProductItem;
