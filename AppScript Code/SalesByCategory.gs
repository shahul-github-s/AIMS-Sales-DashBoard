function doGet(e) {
  var ss = SpreadsheetApp.openById(
    "1M0OYCGwmYMx3PMgGcXRkL4AhhEYZJIzvAksS4XYKR_I"
  ); // Your Google Sheet ID
  var sheet = ss.getSheetByName("Sales Report"); // Ensure this is the correct sheet name

  // Fetch data for "General Service"
  var generalService = {
    week: {
      products: sheet.getRange("D37").getValue(),
      profit: sheet.getRange("E37").getValue(),
    },
    month: {
      products: sheet.getRange("D46").getValue(),
      profit: sheet.getRange("E46").getValue(),
    },
    year: {
      products: sheet.getRange("D55").getValue(),
      profit: sheet.getRange("E55").getValue(),
    },
  };

  // Fetch data for "E-Sevai"
  var eSevai = {
    week: {
      products: sheet.getRange("D38").getValue(),
      profit: sheet.getRange("E38").getValue(),
    },
    month: {
      products: sheet.getRange("D47").getValue(),
      profit: sheet.getRange("E47").getValue(),
    },
    year: {
      products: sheet.getRange("D56").getValue(),
      profit: sheet.getRange("E56").getValue(),
    },
  };

  // Fetch data for "Job Application Support"
  var jobApplicationSupport = {
    week: {
      products: sheet.getRange("D39").getValue(),
      profit: sheet.getRange("E39").getValue(),
    },
    month: {
      products: sheet.getRange("D48").getValue(),
      profit: sheet.getRange("E48").getValue(),
    },
    year: {
      products: sheet.getRange("D57").getValue(),
      profit: sheet.getRange("E57").getValue(),
    },
  };

  // Fetch data for "Travel Services"
  var travelServices = {
    week: {
      products: sheet.getRange("D40").getValue(),
      profit: sheet.getRange("E40").getValue(),
    },
    month: {
      products: sheet.getRange("D49").getValue(),
      profit: sheet.getRange("E49").getValue(),
    },
    year: {
      products: sheet.getRange("D58").getValue(),
      profit: sheet.getRange("E58").getValue(),
    },
  };

  // Structure the response data
  var response = {
    generalService,
    eSevai,
    jobApplicationSupport,
    travelServices,
  };

  // Return the response as JSON
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}
