import {Application, Router} from "express";
import superheroController from "../controllers/superheroController";
const router = Router();

router.get("/api/superheroes", superheroController.getAllSuperheroesHumilityScoreDescending);
router.post("/api/superheroes", superheroController.createNewSuperhero);
router.get("*", (req, res) => res.status(404).send("Not found"));

export default (app: Application) => {
    app.use(router);
};