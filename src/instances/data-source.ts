import { createConnection } from "typeorm";

export const initialDatabase = async () => {
  try {
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "your_mysql_username",
      password: "your_mysql_password",
      database: "mediashop",
      entities: ["src/entities/*.ts"],
      synchronize: true,
    });

    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};
