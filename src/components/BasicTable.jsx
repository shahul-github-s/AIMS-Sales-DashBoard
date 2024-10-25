import styled from "styled-components/macro";
import theme from "styled-theming";
import { Table } from "antd";

// Ensure you have these theme variables defined properly somewhere
const textColorDark = "#000"; // Pure black color for text in dark mode

const BasicTable = styled(Table)`
  flex-grow: 1;
  height: 100%;
  overflow: hidden;

  .ant-spin-nested-loading,
  .ant-spin-container,
  .ant-table-container,
  .ant-table-content,
  .ant-table {
    height: 100%;
  }

  .ant-checkbox-wrapper {
    &:hover .ant-checkbox-inner,
    &:focus .ant-checkbox-inner {
      border-color: ${theme("theme", {
        light: "var(--text-dark) !important",
        dark: "var(--peach) !important",
      })};
    }
  }

  .ant-checkbox-checked::after {
    display: none;
  }

  .ant-checkbox-inner {
    width: 15px;
    height: 15px;
    border-radius: 4px;
    background: ${theme("theme", {
      light: "var(--header-dark)",
      dark: "transparent",
    })};
    border-color: ${theme("theme", {
      light: "var(--text-dark)",
      dark: "var(--label-light)",
    })};

    &:hover,
    &:focus {
      border-color: ${theme("theme", {
        light: "var(--text-dark) !important",
        dark: "var(--peach) !important",
      })};
    }

    &::after {
      width: 12px;
      height: 12px;
      border-radius: 3px;
      background: var(--peach);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none !important;
    }
  }

  .ant-table {
    background: ${theme("theme", {
      light: "#fff", // White background for light mode
      dark: "#fff", // White background for dark mode
    })};
    border-radius: 16px;
    border: 1px solid
      ${theme("theme", {
        light: "var(--border)",
        dark: "var(--border-dark)", // Darker border for dark mode
      })};
    display: flex;
    flex-direction: column;
  }

  .ant-table-thead .ant-table-cell {
    padding: 18px 20px 16px;
    border-color: var(--border);
    color: ${theme("theme", {
      light: "var(--label)",
      dark: textColorDark, // Pure black text for dark mode
    })};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;

    &:before {
      display: none;
    }

    .wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .ant-table-tbody {
    .ant-table-cell {
      border-color: ${theme("theme", {
        light: "var(--border)",
        dark: "var(--border-dark)", // Darker border for dark mode
      })};
      color: ${theme("theme", {
        light: "var(--header)",
        dark: "#000", // Pure black text for dark mode
      })};
      padding: 16px 20px;
      font-weight: 500;
      font-size: 15px;
      background: ${theme("theme", {
        light: "#fff", // White background by default
        dark: "#fff", // White background in dark mode as well
      })};
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background: ${theme("theme", {
          light: "var(--background-light-hover)",
          dark: "#000", // Black background on hover in dark mode
        })};
        color: ${theme("theme", {
          light: "var(--header)",
          dark: "#fff", // White text color on hover in dark mode
        })};
      }
    }

    .ant-table-row:last-of-type .ant-table-cell {
      border-bottom: 0;
    }
  }

  .ant-table-footer {
    padding: 13px 24px 24px;
    border-top: 1px solid var(--border);
    color: ${theme("theme", {
      light: "var(--label)",
      dark: textColorDark, // Pure black text for dark mode
    })};
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .ant-table-column-sorters {
    justify-content: flex-start;
    gap: 8px;

    .ant-table-column-title {
      flex: unset;
    }

    .ant-table-column-sorter.ant-table-column-sorter-full {
      color: var(--label-light);

      .anticon {
        &.active,
        &:hover {
          color: var(--header);
        }
      }
    }
  }
`;

export default BasicTable;
