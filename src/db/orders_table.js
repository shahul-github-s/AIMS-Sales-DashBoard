// @db/orders_table.js

import { faker } from "@faker-js/faker";

// Dummy data for demonstration. Replace this with actual data from Google Sheets.
const orders_table = [
  {
    serviceUnitReport: "Service A",
    total: faker.commerce.price(),
    profit: faker.commerce.price(),
    rajeswari: faker.commerce.price(),
    susmitha: faker.commerce.price(),
    vasuthiyagarajan: faker.commerce.price(),
    kaviya: faker.commerce.price(),
    refai: faker.commerce.price(),
    shaffi: faker.commerce.price(),
    mathiazhagan: faker.commerce.price(),
    sheerin: faker.commerce.price(),
    gayathri: faker.commerce.price(),
  },
  // Add more rows as needed.
];

export default orders_table;
