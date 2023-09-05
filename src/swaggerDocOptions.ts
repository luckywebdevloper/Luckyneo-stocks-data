/**
 * eslint-disable max-len
 *
 * @format
 */

const port = process.env.PORT || 3000;
const hostUrl = process.env.HOST_URL || `http://localhost:${port}`;
export const swaggerDocOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.1.0",
      title: " lucky neo National Stock Exchange",
      description:
        "This package will help us to get equity details and historical data from National Stock Exchange of India.",
      contact: {
        email: "mobiartlucky@gmail.com",
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
