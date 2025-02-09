import { Application, Router } from "express";
import superheroController from "../controllers/superheroController";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
const router = Router();

const swaggerDoc = JSON.parse(fs.readFileSync("./openapi.json", "utf-8"));

router.get(
  "/superheroes",
  superheroController.getAllSuperheroesHumilityScoreDescending
);
router.post("/superheroes", superheroController.createNewSuperhero);

export default (app: Application) => {
  app.use("/api", router);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  app.get("/*", (req, res) => {
    res.redirect("/api-docs");
  });
};
