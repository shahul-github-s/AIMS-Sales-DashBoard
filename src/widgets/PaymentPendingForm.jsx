import React, { useState, useEffect } from "react";
// import "./CustomStyles/form.css";

function PaymentPendingForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [unsettledAmount, setUnsettledAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [reductionAmount, setReductionAmount] = useState("0");
  const [pendingAmount, setPendingAmount] = useState("0");
  const [proceededAmount, setProceededAmount] = useState("0");
  const [creditedTransactionMode, setCreditedTransactionMode] = useState("");
  const [dispositionedBy, setDispositionedBy] = useState("");

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  useEffect(() => {
    if (mobileNumber.length === 10) {
      fetch(
        `https://script.google.com/macros/s/AKfycbwh1e3JZmncFxkg3DO4FPE9alCjWm-VqkcO-QnqIarDcntHSTHkAYjEsVwQtKQBop0/exec?mobileNumber=${mobileNumber}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.customerName) {
            setCustomerName(data.customerName);
            setGender(data.gender);
            setLocation(data.location);
            setDateOfBirth(
              new Date(data.dateOfBirth).toISOString().split("T")[0]
            );
            setUnsettledAmount(data.unsettledAmount);
            setDiscountAmount(data.discountAmount);
          } else {
            setCustomerName(data.error || "Not Found");
            setGender("");
            setLocation("");
            setDateOfBirth("");
            setUnsettledAmount("");
            setDiscountAmount("");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [mobileNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbykcwc23QKeY3AUfE8CBD6fN9ux504UVY33dIw-P2ngNgK5y2n-NasiOh86g6IfJDlZ/exec";
    if (
      creditedTransactionMode === "Select Transaction Mode" ||
      dispositionedBy === "Select Employee Name"
    ) {
      alert("Please select valid Transaction Details.");
    } else {
      fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({
          "Mobile Number": mobileNumber,
          "Customer Name": customerName,
          Location: location,
          "Date of Birth": dateOfBirth,
          Gender: gender,
          "Reduction Amount": reductionAmount,
          "Pending Amount": pendingAmount,
          "Proceeded Amount": proceededAmount,
          "Credited Transaction Mode": creditedTransactionMode,
          "Unsettled Amount": unsettledAmount,
          "Discount Amount": discountAmount,
          "Dispositioned By": dispositionedBy,
        }),
      })
        .then((response) => {
          alert("Thank you! Your form is submitted successfully.");
          console.log("Success!", response);
          window.location.reload();
        })
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <div className="container">
      <header>Payment Disposition Form</header>
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <span className="title">Customer Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  required
                />
              </div>

              <div className="input-field">
                <label>Customer Name</label>
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={customerName}
                  readOnly
                />
              </div>

              <div className="input-field">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  readOnly
                />
              </div>
              <div className="input-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  placeholder="birth date"
                  value={dateOfBirth}
                  readOnly
                />
              </div>
              <div className="input-field">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  readOnly
                />
              </div>

              <div className="input-field">
                <label>Dispositioned By</label>
                <select
                  value={dispositionedBy}
                  onChange={(e) => setDispositionedBy(e.target.value)}
                  required
                >
                  <option disabled selected>
                    Select Employee Name
                  </option>
                  <option value="Mohamed Refai">Mohamed Refai</option>
                  <option value="Shaffi Hussain">Shaffi Hussain</option>
                  <option value="Riyaz">Riyaz</option>
                </select>
              </div>
            </div>
          </div>

          <div className="details ID">
            <span className="title">Payment Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Reduction Amount</label>
                <input
                  type="text"
                  placeholder="Enter Reduction Amount"
                  value={reductionAmount}
                  onChange={(e) => setReductionAmount(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label>Pending Amount</label>
                <input
                  type="text"
                  placeholder="Enter Pending Amount"
                  value={pendingAmount}
                  onChange={(e) => setPendingAmount(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label>Proceeded Amount</label>
                <input
                  type="text"
                  placeholder="Enter Proceeded Amount"
                  value={proceededAmount}
                  onChange={(e) => setProceededAmount(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <label>Credited Transaction Mode</label>
                <select
                  value={creditedTransactionMode}
                  onChange={(e) => setCreditedTransactionMode(e.target.value)}
                  required
                >
                  <option disabled selected>
                    Select Transaction Mode
                  </option>
                  <option value="Not Credited">Not Credited</option>
                  <option value="In-Hand Cash">In-Hand Cash</option>
                  <option value="Online Transaction - UPI">
                    Online Transaction - UPI
                  </option>
                </select>
              </div>

              <div className="input-field">
                <label>Unsettled Amount</label>
                <input
                  type="text"
                  placeholder="Unsettled Amount"
                  value={unsettledAmount}
                  readOnly
                />
              </div>

              <div className="input-field">
                <label>Discount Amount</label>
                <input
                  type="text"
                  placeholder="Discount Amount"
                  value={discountAmount}
                  readOnly
                />
              </div>
            </div>

            <button className="submit">
              <span className="btnText">Submit</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentPendingForm;
