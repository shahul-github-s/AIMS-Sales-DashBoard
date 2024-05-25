document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nextBtn = form.querySelector(".nextBtn");
  const backBtn = form.querySelector(".backBtn");
  const formFirst = document.querySelector(".form.first");
  const formSecond = document.querySelector(".form.second");
  const allRequiredFields = formFirst.querySelectorAll(
    "input[required], select[required]"
  );

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let allFilled = true;

    allRequiredFields.forEach((field) => {
      if (
        !field.value ||
        field.value === "Select Location" ||
        field.value === "Select gender" ||
        field.value === "Select Staff Name" ||
        field.value === "Select Service Category" ||
        field.value === "Select Service Department" ||
        field.value === "Select Service Name" ||
        field.value === "Select Lead Generated Source Name" ||
        field.value === "Select Customer Source Name" ||
        field.value === "Select Referral Code"
      ) {
        field.classList.add("error");
        allFilled = false;
      } else {
        field.classList.remove("error");
      }
    });

    if (allFilled) {
      form.classList.add("secActive");
    } else {
      alert("Please fill all required fields before proceeding.");
    }
  });

  backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.remove("secActive");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz2mAv0E8eCsBTRQLnOXtFhM3ibiFSBxZU4bqy5GLTX0PCldXsffX93_kaLIAECDbWc/exec";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Thank you! Your form is submitted successfully.");
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });

  const categorySelect = document.getElementById("category-select");
  const departmentSelect = document.getElementById("department-select");
  const serviceSelect = document.getElementById("service-select");

  const departments = {
    "general-services": ["Aadhar Card", "Voter ID"],
    "e-savai": [],
    "job-application-support": [],
    "travel-services": [],
    "tour-services": [],
  };

  const services = {
    "Aadhar Card": ["Number Change", "Address Change"],
    "Voter ID": ["Photo Change", "Signature"],
  };

  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    const relevantDepartments = departments[selectedCategory] || [];

    departmentSelect.innerHTML =
      "<option disabled selected>Select Service Department</option>";
    relevantDepartments.forEach((dept) => {
      const option = document.createElement("option");
      option.value = dept;
      option.textContent = dept;
      departmentSelect.appendChild(option);
    });

    serviceSelect.innerHTML =
      "<option disabled selected>Select Service Name</option>";
  });

  departmentSelect.addEventListener("change", function () {
    const selectedDepartment = departmentSelect.value;
    const relevantServices = services[selectedDepartment] || [];

    serviceSelect.innerHTML =
      "<option disabled selected>Select Service Name</option>";
    relevantServices.forEach((service) => {
      const option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      serviceSelect.appendChild(option);
    });
  });

  const referralCodeSelect = document.getElementById("referral-code-select");
  const customerSourceSelect = document.getElementById(
    "customer-source-select"
  );
  const leadSourceSelect = document.getElementById("lead-source-select");

  const customerSources = {
    "AIMS-2007": "AIMS",
    "AIMS-2024": "CR Digital Vibes",
  };

  const leadSources = {
    AIMS: "Walk-in",
    "CR Digital Vibes": "Instagram",
  };

  referralCodeSelect.addEventListener("change", function () {
    const selectedReferralCode = referralCodeSelect.value;
    const relevantCustomerSource = customerSources[selectedReferralCode] || "";

    customerSourceSelect.innerHTML =
      "<option disabled selected>Select Customer Source Name</option>";
    if (relevantCustomerSource) {
      const option = document.createElement("option");
      option.value = relevantCustomerSource;
      option.textContent = relevantCustomerSource;
      customerSourceSelect.appendChild(option);
      customerSourceSelect.value = relevantCustomerSource;
    }

    const relevantLeadSource = leadSources[relevantCustomerSource] || "";
    leadSourceSelect.innerHTML =
      "<option disabled selected>Select Lead Generated Source Name</option>";
    if (relevantLeadSource) {
      const option = document.createElement("option");
      option.value = relevantLeadSource;
      option.textContent = relevantLeadSource;
      leadSourceSelect.appendChild(option);
      leadSourceSelect.value = relevantLeadSource;
    }
  });

  customerSourceSelect.addEventListener("change", function () {
    const selectedCustomerSource = customerSourceSelect.value;
    const relevantLeadSource = leadSources[selectedCustomerSource] || "";

    leadSourceSelect.innerHTML =
      "<option disabled selected>Select Lead Generated Source Name</option>";
    if (relevantLeadSource) {
      const option = document.createElement("option");
      option.value = relevantLeadSource;
      option.textContent = relevantLeadSource;
      leadSourceSelect.appendChild(option);
      leadSourceSelect.value = relevantLeadSource;
    }
  });

  const mobileNumberInput = document.getElementById("mobile-number");

  mobileNumberInput.addEventListener("input", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{0,10}$/.test(value)) {
      mobileNumberInput.value = value.slice(0, 10); // Limit to 10 digits
    }
  });

  mobileNumberInput.addEventListener("focusout", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{10}$/.test(value)) {
      alert("Mobile number must be exactly 10 digits.");
    }
  });
});
