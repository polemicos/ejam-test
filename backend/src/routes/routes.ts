import {Application, Router} from "express";
import superheroController from "../controllers/superheroController";
const router = Router();

router.get("/superheroes", superheroController.getAllSuperheroesHumilityScoreDescending);
router.post("/superheroes", superheroController.createNewSuperhero);
router.get("*", (req, res) => res.status(404).send("Not found"));

export default (app: Application) => {
    app.use(router);
};