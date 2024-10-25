import React from "react";

const Search = ({
  wrapperClass,
  inputClass,
  placeholder = "Search",
  value,
  onChange,
}) => {
  return (
    <div className={`${wrapperClass || ""} relative`}>
      {/* Search Icon */}
      <i
        className="absolute icon-magnifying-glass-regular text-base top-1/2 z-10 -translate-y-1/2 left-[26px]
               text-sidebar dark:text-turquoise"
      />

      {/* Input Field */}
      <input
        className={`field-input font-semibold !pl-[55px] dark:bg-body dark:border-body
                   dark:hover:border-turquoise dark:focus:border-turquoise ${
                     inputClass || ""
                   }`}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {/* Clear Button */}
      {value && (
        <button
          className={`absolute top-1/2 -translate-y-1/2 right-4 text-red text-xs`}
          onClick={() => onChange("")}
          aria-label="Clear"
        >
          {/* <i className="icon-xmark-regular" /> */}
        </button>
      )}
    </div>
  );
};

export default Search;
