import dotenv from "dotenv";
import * as sql from "mssql";

dotenv.config();

export const sqlConfig: sql.config = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: "localhost", // Change this to your SQL Server's hostname or IP address
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // Change to true if your SQL Server uses SSL
    trustServerCertificate: true, // Change to false in production for certificate validation
  },
};
