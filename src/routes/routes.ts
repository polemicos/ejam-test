import {Application, Router} from "express";
import superheroController from "../controllers/superheroController";
const router = Router();

router.get("/superheroes", superheroController.getAllSuperheroesHumilityScoreDescending);
router.post("/superheroes", superheroController.createNewSuperhero);

export default (app: Application) => {
    app.use("/api", router);
};