import {Application, Router} from "express";
import superheroController from "../controllers/superheroController";
const router = Router();

router.get("/api/superheroes", superheroController.getAllSuperheroesHumilityScoreDescending);
router.post("/api/superheroes", superheroController.createNewSuperhero);

export default (app: Application) => {
    app.use(router);
};