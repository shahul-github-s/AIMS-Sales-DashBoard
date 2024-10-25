// components
import TopSellingProductItem from "@components/TopSellingProductItem";
import StarRating from "@ui/StarRating";
// import IconButton from "@ui/IconButton";
import StatusBadge from "@ui/StatusBadge";

// utils
import { commaFormatter, addZero } from "@utils/helpers";
import dayjs from "dayjs";

export const TOP_SELLING_COLUMN_DEFS = [
  {
    title: "Transaction Bank",
    dataIndex: "transactionBank", // Updated to match the key in your data
    width: 280,
  },
  {
    title: "Sales", // Changed from "Revenue" to "Sales"
    dataIndex: "sales", // Updated to match the key in your data
    render: (text) => <span>₹{text}</span>, // Using Indian Rupee symbol (₹)
    sorter: (a, b) => a.sales - b.sales, // Sorting based on sales value
  },
  {
    title: "Profit",
    dataIndex: "profit", // Updated to match the key in your data
    render: (text) => <span>₹{text}</span>, // Formatting with Indian Rupee symbol (₹)
    sorter: (a, b) => a.profit - b.profit, // Sorting based on profit value
  },
  {
    title: "Expenses",
    dataIndex: "expenses", // Updated to match the key in your data
    render: (text) => {
      const formattedTotal = text.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      });
      return <span>{formattedTotal}</span>; // Formatting as INR currency with comma separator
    },
    sorter: (a, b) => a.expenses - b.expenses, // Sorting based on expenses value
  },
];

export const ORDER_COLUMN_DEFS = [
  {
    title: "Product",
    dataIndex: "product",
    render: (text, record) => (
      <TopSellingProductItem product={record} imgSize={56} />
    ),
    width: 305,
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (text) => <span>${text}</span>,
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Quantity",
    dataIndex: "qty",
    render: (text) => <span>{addZero(text)}</span>,
  },
  {
    title: "Total",
    dataIndex: "total",
    render: (text, record) => (
      <span>${commaFormatter(record.price * record.qty, 2)}</span>
    ),
    sorter: (a, b) => a.price * a.qty - b.price * b.qty,
  },
];

export const REVIEW_COLUMN_DEFS = [
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <span className="font-semibold text-header text-[15px] capitalize">
        {text}
      </span>
    ),
    responsive: ["xl"],
  },
  {
    title: "Product",
    dataIndex: "product",
    render: (text, record) => (
      <TopSellingProductItem
        product={record.product}
        imgSize={40}
        withCategory
      />
    ),
    sorter: (a, b) => a.product.name.localeCompare(b.product.name),
  },
  {
    title: "Rating",
    dataIndex: "rating",
    render: (text) => <StarRating value={text} fontSize={14} />,
    responsive: ["lg"],
    sorter: (a, b) => a.rating - b.rating,
  },
  {
    title: "Review",
    dataIndex: "review",
    width: 180,
    render: (text) => (
      <p className="text-xs truncate max-w-[180px] text-label dark:text-[var(--border-light)] 4xl:max-w-[260px]">
        {text}
      </p>
    ),
  },
  {
    title: "Author",
    dataIndex: "author",
    render: (text, record) => (
      <span className="font-medium text-header text-[15px]">
        {record.user.firstName} {record.user.lastName}
      </span>
    ),
    responsive: ["xl"],
    sorter: (a, b) => a.user.lastName.localeCompare(b.user.lastName),
  },
  {
    title: "Submitted on",
    dataIndex: "date",
    render: (text) => (
      <span className="text-label">
        {dayjs(text).format("MMM DD, YYYY - hh:mm A")}
      </span>
    ),
    sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
  },
];

// export const ORDERS_COLUMN_DEFS = [
//   {
//     title: "Order ID",
//     dataIndex: "id",
//     render: (text) => <span>#{text}</span>,
//   },
//   {
//     title: "Customer",
//     render: (text, record) => (
//       <span>
//         {record.user.firstName} {record.user.lastName}
//       </span>
//     ),
//     sorter: (a, b) => a.user.lastName.localeCompare(b.user.lastName),
//     responsive: ["lg"],
//   },
//   {
//     title: "Amount",
//     dataIndex: "amount",
//     render: (text) => <span>${text}</span>,
//     sorter: (a, b) => a.amount - b.amount,
//   },
//   {
//     title: "Payment method",
//     dataIndex: "method",
//     render: (text) => <span>{text}</span>,
//     responsive: ["xl"],
//   },
//   {
//     title: "Order date",
//     dataIndex: "date",
//     render: (text) => <span>{dayjs(text).format("MMM DD, YYYY")}</span>,
//     sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     render: (text) => <StatusBadge status={text} />,
//   },
//   {
//     title: "",
//     width: 36,
//     render: () => <IconButton className="dark:bg-widget" />,
//   },
// ];

export const ORDER_STATUS_COLUMN_DEFS = [
  {
    title: "Order ID",
    dataIndex: "id",
    render: (text) => (
      <span className="text-sidebar font-semibold dark:text-turquoise">
        #{text}
      </span>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (text) => (
      <span className="font-medium">{dayjs(text).format("MMM DD, YYYY")}</span>
    ),
    sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => <StatusBadge status={text} />,
    className: "3xl:!pl-2 4xl:!pl-6",
  },
];

export const ORDERS_WIDGET_COLUMN_DEFS = [
  {
    title: "Order ID",
    dataIndex: "id",
    render: (text) => <span>#{text}</span>,
  },
  {
    title: "Customer",
    render: (text, record) => (
      <span>
        {record.user.firstName} {record.user.lastName}
      </span>
    ),
    sorter: (a, b) => a.user.lastName.localeCompare(b.user.lastName),
    responsive: ["xxl"],
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (text) => <span>${text}</span>,
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "Payment method",
    dataIndex: "method",
    render: (text) => <span>{text}</span>,
    responsive: ["xl"],
  },
  {
    title: "Order date",
    dataIndex: "date",
    render: (text) => <span>{dayjs(text).format("MMM DD, YYYY")}</span>,
    sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => <StatusBadge status={text} />,
  },
];
// @constants/columnDefs.js
// constants/columnDefs.js

// constants/columnDefs.js

export const ORDERS_COLUMN_DEFS = [
  {
    title: "Service Unit Report",
    dataIndex: "serviceUnitReport",
    key: "serviceUnitReport",
    fixed: "left", // Fix the first column
    width: 250, // Adjust width as necessary
  },
  {
    title: "Ration Card",
    dataIndex: "rationCard",
    key: "rationCard",
  },
  {
    title: "Voter Id",
    dataIndex: "voterId",
    key: "voterId",
  },
  {
    title: "Aadhar Card",
    dataIndex: "aadharCard",
    key: "aadharCard",
  },
  {
    title: "Pan Card",
    dataIndex: "panCard",
    key: "panCard",
  },
  {
    title: "College Application",
    dataIndex: "collegeApplication",
    key: "collegeApplication",
  },
  {
    title: "License and RTO Services",
    dataIndex: "licenseAndRtoServices",
    key: "licenseAndRtoServices",
  },
  {
    title: "Money Transfer Services",
    dataIndex: "moneyTransferServices",
    key: "moneyTransferServices",
  },
  {
    title: "Counselling Apply",
    dataIndex: "counsellingApply",
    key: "counsellingApply",
  },
  {
    title: "TN Police",
    dataIndex: "tnPolice",
    key: "tnPolice",
  },
  {
    title: "TNEB",
    dataIndex: "tneb",
    key: "tneb",
  },
  {
    title: "Online Payments",
    dataIndex: "onlinePayments",
    key: "onlinePayments",
  },
  {
    title: "Dharisanam Bookings",
    dataIndex: "dharisanamBookings",
    key: "dharisanamBookings",
  },
  {
    title: "Typing Services",
    dataIndex: "typingServices",
    key: "typingServices",
  },
  {
    title: "MSME",
    dataIndex: "msme",
    key: "msme",
  },
  {
    title: "UDAY Scheme",
    dataIndex: "udayScheme",
    key: "udayScheme",
  },
  {
    title: "Income Certificate",
    dataIndex: "incomeCertificate",
    key: "incomeCertificate",
  },
  {
    title: "Community Certificate",
    dataIndex: "communityCertificate",
    key: "communityCertificate",
  },
  {
    title: "Nativity Certificate",
    dataIndex: "nativityCertificate",
    key: "nativityCertificate",
  },
  {
    title: "Intercaste Marriage Certificate",
    dataIndex: "intercasteMarriageCertificate",
    key: "intercasteMarriageCertificate",
  },
  {
    title: "Obc Certificate",
    dataIndex: "obcCertificate",
    key: "obcCertificate",
  },
  {
    title: "No Male Child Certificate",
    dataIndex: "noMaleChildCertificate",
    key: "noMaleChildCertificate",
  },
  {
    title: "First Graduate Certificate",
    dataIndex: "firstGraduateCertificate",
    key: "firstGraduateCertificate",
  },
  {
    title: "Small/Marginal Farmer Certificate",
    dataIndex: "smallMarginalFarmerCertificate",
    key: "smallMarginalFarmerCertificate",
  },
  {
    title: "Widow Certificate",
    dataIndex: "widowCertificate",
    key: "widowCertificate",
  },
  {
    title: "Deserted Women Certificate",
    dataIndex: "desertedWomenCertificate",
    key: "desertedWomenCertificate",
  },
  {
    title: "Disability Pension Scheme",
    dataIndex: "disabilityPensionScheme",
    key: "disabilityPensionScheme",
  },
  {
    title: "Widow Pension Scheme",
    dataIndex: "widowPensionScheme",
    key: "widowPensionScheme",
  },
  {
    title: "Deserted Women Pension Scheme",
    dataIndex: "desertedWomenPensionScheme",
    key: "desertedWomenPensionScheme",
  },
  {
    title: "Unmarried Women Pension Scheme",
    dataIndex: "unmarriedWomenPensionScheme",
    key: "unmarriedWomenPensionScheme",
  },
  {
    title: "Old Age Pension Scheme",
    dataIndex: "oldAgePensionScheme",
    key: "oldAgePensionScheme",
  },
  {
    title: "TN Employment Registration",
    dataIndex: "tnEmploymentRegistration",
    key: "tnEmploymentRegistration",
  },
  {
    title: "Government Job Application",
    dataIndex: "governmentJobApplication",
    key: "governmentJobApplication",
  },
  {
    title: "Passport",
    dataIndex: "passport",
    key: "passport",
  },
  {
    title: "Flight Ticket",
    dataIndex: "flightTicket",
    key: "flightTicket",
  },
  {
    title: "Visa",
    dataIndex: "visa",
    key: "visa",
  },
  {
    title: "Certificate Attestation",
    dataIndex: "certificateAttestation",
    key: "certificateAttestation",
  },
  {
    title: "Bus Booking",
    dataIndex: "busBooking",
    key: "busBooking",
  },
  {
    title: "Visa Stamping",
    dataIndex: "visaStamping",
    key: "visaStamping",
  },
  {
    title: "Cruise Booking",
    dataIndex: "cruiseBooking",
    key: "cruiseBooking",
  },
  {
    title: "Hotel Booking",
    dataIndex: "hotelBooking",
    key: "hotelBooking",
  },
  {
    title: "Medical Appointment",
    dataIndex: "medicalAppointment",
    key: "medicalAppointment",
  },
  {
    title: "Tour Services",
    dataIndex: "tourServices",
    key: "tourServices",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];
