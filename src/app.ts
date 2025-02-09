import express, { Application, Request, Response } from "express";
import routesConfig from "./routes/routes";
import cors from "cors";
const app: Application = express();

app.use((req: Request, res: Response, next) => {
  next();
}, cors({ maxAge: 864600 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routesConfig(app);

export default app;
