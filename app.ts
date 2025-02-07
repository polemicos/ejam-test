import express, { Application } from "express";
import routesConfig from "./routes/routes";
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routesConfig(app);

export default app;