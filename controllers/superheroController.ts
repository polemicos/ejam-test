import ISuperhero from "../superheroModel";
import { Request, Response } from "express";

let superheroes : ISuperhero[] = [
    {
        id: 1,
        name: "Mikita Rakovich",
        superpower: "Humble One",
        humility_score: 4
    },
    {
        id: 2,
        name: "John Doe",
        superpower: "Secret Genius",
        humility_score: 8
    },
    {
        id: 3,
        name: "Jane Doe",
        superpower: "Great Coder",
        humility_score: 2
    }
]
const getAllSuperheroesHumilityScoreDescending = (req: Request, res: Response) => {
    try{
        const bodyLimit = Number(req.params.bodyLimit) || superheroes.length;
        const sorted = [...superheroes].sort((a, b) => b.humility_score - a.humility_score);
        res.status(200).json(sorted.slice(0, bodyLimit));
    }
    catch (error: any) {
        res.status(500).send(error.message);
    }
    
};

const createNewSuperhero = (req: Request, res: Response) => {
    try{
        const { name, superpower, humility_score } = req.body;
        if(!name || !superpower || !humility_score) {
            return res.status(400).send("Name, superpower, and humility score are required");
        }
        if (humility_score > 10 || humility_score < 0) {
            return res.status(400).send("Humility score must be between 0 and 10");
        }   

        const newSuperhero: ISuperhero = {
            id: superheroes.length + 1,
            name,
            superpower,
           humility_score
        };
        superheroes.push(newSuperhero);
        res.status(201).json(newSuperhero);
        }
    catch (error: any) {
        res.status(500).send(error.message);
    }
};

export default { getAllSuperheroesHumilityScoreDescending, createNewSuperhero };
