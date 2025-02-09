// Here we are setting up the whole express server
import express, { Application, Request, Response } from "express";
import routesConfig from "./routes/routes";

// Using cors in order to avoid CORS policy restrictions
import cors from "cors";
const app: Application = express();

app.use((req: Request, res: Response, next) => {
  next();
}, cors({ maxAge: 864600 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring the routes
routesConfig(app);

export default app;
