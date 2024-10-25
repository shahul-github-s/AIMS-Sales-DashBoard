const top_selling = [];

// Fetch data from Google Apps Script
const fetchTopSellingData = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwad1aZtWO7iN4iyR8bTnu9RjZW_j66P1tKuK8wvDs9dcgJLHdAPjFDjvI9CNYrvi9svA/exec" // Replace with your actual Google Apps Script URL
    );
    const data = await response.json();

    // Populate top_selling with fetched data
    top_selling.push(...data);
  } catch (error) {
    console.error("Error fetching top selling data:", error);
  }
};

// Call the function to fetch data
fetchTopSellingData();

export default top_selling;
