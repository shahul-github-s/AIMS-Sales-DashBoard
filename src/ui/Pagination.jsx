import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex items-center justify-between py-3 px-4 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Display showing items info, hidden on small screens */}
      <p className="uppercase text-sm font-semibold text-gray-700 dark:text-gray-300 hidden md:block">
        Showing {currentPage * itemsPerPage + 1} -{" "}
        {Math.min((currentPage + 1) * itemsPerPage, totalItems)} of {totalItems}
      </p>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          className={`btn btn--base h-[30px] px-5 gap-1 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Go to previous page"
        >
          Previous
        </button>

        {/* Page number display visible on all screens */}
        <span className="text-sm px-5 font-semibold text-gray-700 dark:text-gray-300">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          className={`btn btn--base h-[30px] px-5 gap-1 ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          aria-label="Go to next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
