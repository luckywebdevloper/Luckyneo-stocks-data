/**
 * eslint-disable max-len
 *
 * @format
 */

const port = process.env.PORT || 3000;
const hostUrl =
  process.env.HOST_URL || `https://stock-data-251j.onrender.com${port}`;
export const swaggerDocOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.1.0",
      title: " lucky neo National Stock Exchange",
      description:
        "hello tahir me lucky bol rha hu  tere hisabh se dekh lena ki kesse use ker na he api historical data bhi he or intraday data bhi or api ki limit nhi to auto refresh ka option  ho jay ga na 10days me complete kerna he application",
      contact: {
        email: "mobiartlucky@gmail.com",
        phone: "+91 6269957381",
      },
    },
    servers: [
      {
        url: hostUrl,
      },
    ],
    tags: [
      {
        name: "Base",
        description: "Base API of NSE India",
      },
      {
        name: "Common",
        description: "Contains all common APIs of NSE India",
      },
      {
        name: "Equity",
        description: "Contains all equity related APIs of NSE India",
      },
      {
        name: "Index",
        description: "Contains all index related APIs of NSE India",
      },
      {
        name: "Helpers",
        description: "Contains all helper APIs of NSE India",
      },
    ],
  },
  apis: ["./build/server.js"],
};
