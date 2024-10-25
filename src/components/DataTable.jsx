import React, { useEffect, useState } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your Google Apps Script URL
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbx6FO9VDpytn05OPaBIoECw4gZLYFq2y134esjHRUWqO7VgVi8XbFVIP1mafR4-vA3o8w/exec"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <h2>Data from Google Sheet (C75:N118)</h2>
      {data.length > 0 ? (
        <table border="1">
          {/* <thead>
            {/* <tr>
              * Replace with your actual column headers 
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
              <th>Column 6</th>
              <th>Column 7</th>
              <th>Column 8</th>
              <th>Column 9</th>
              <th>Column 10</th>
              <th>Column 11</th>
              <th>Column 12</th>
            </tr>
          </thead> */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataTable;
