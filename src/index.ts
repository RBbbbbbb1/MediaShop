import * as dotenv from "dotenv";
import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { initialDatabase } from "./instances/data-source";
import { router as appRouter } from "./routers/app-router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

initialDatabase();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", appRouter); // Update the base path if needed

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
