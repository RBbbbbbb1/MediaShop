import { createConnection } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export async function initialDatabase(): Promise<void> {
  try {
    const connection = await createConnection({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "",
      password: "",
      database: "mediashop",
      entities: [__dirname + "/../entities/*.ts"], // Đường dẫn đến thư mục chứa các file entity
      logging: true,
      synchronize: true,
    });

    console.log("Data source has been initialized!");

    await connection.close();
  } catch (error) {
    console.log("Error during data source initialization:", error);
  }
}
