import { Application, Router } from "express";
import superheroController from "../controllers/superheroController";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
const router = Router();

const swaggerDoc = JSON.parse(fs.readFileSync("./openapi.json", "utf-8"));

// Endpoints for superheroes,
router.get(
  "/superheroes",
  superheroController.getAllSuperheroesHumilityScoreDescending
);
router.post("/superheroes", superheroController.createNewSuperhero);

export default (app: Application) => {
  // Passing the router to the app
  app.use("/api", router);

  // Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  // Default route is redirected to /api-docs
  app.get("/*", (req, res) => {
    res.redirect("/api-docs");
  });
};
