import dotenv from 'dotenv';
dotenv.config();
import express, { Express,Request,Response } from "express";
import bookRoutes from "./routes/book.routes";
import connectDB from "./config/db.config";
import errorhandler from "./middleware/error_handler.middleware";
const app: Express = express();

const port: number = 5000;


//connect to mongodb
connectDB()

// built in middleware for json
app.use(express.json());

app.use("/api", bookRoutes);

app.all("*", (_req: Request, res: Response) => {
  res.status(404).json({ message: "No API Found" });
});
app.use(errorhandler)

app.listen(port, (): void => {
  console.log(`server is running in port http://localhost:${port}`);
});
