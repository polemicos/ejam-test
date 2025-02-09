import ISuperhero from "../models/superheroModel";
import { Request, Response } from "express";

// In-memory database of superhero employees
let superheroes: ISuperhero[] = [
  {
    id: 1,
    name: "Mikita Rakovich",
    superpower: "Humble One",
    humility_score: 4,
  },
  {
    id: 2,
    name: "John Doe",
    superpower: "Secret Genius",
    humility_score: 8,
  },
  {
    id: 3,
    name: "Jane Doe",
    superpower: "Great Coder",
    humility_score: 2,
  },
];
const getAllSuperheroesHumilityScoreDescending = (
  req: Request,
  res: Response
) => {
  try {
    // Sorting the copy of the superheroes array by humility score in descending order
    const sorted = [...superheroes].sort(
      (a, b) => b.humility_score - a.humility_score
    );

    // Sending the sorted superheroes array
    res.status(200).json(sorted);
  } catch (error: any) {
    // Sending an error message
    res.status(500).send("Error fetching superheroes: " + error.message);
  }
};

const createNewSuperhero = (req: Request, res: Response) => {
  try {
    const { name, superpower, humility_score } = req.body;

    // Checking if all required fields are present
    if (!name || !superpower || !humility_score) {
      // Sending an error message
      return res
        .status(400)
        .send("Name, superpower, and humility score are required");
    }
    if (humility_score > 10 || humility_score < 0) {
      // Sending an error message
      return res.status(400).send("Humility score must be between 0 and 10");
    }

    // Creating a new superhero
    const newSuperhero: ISuperhero = {
      id: superheroes.length + 1,
      name,
      superpower,
      humility_score: Number(humility_score),
    };

    // Adding the new superhero to the superheroes array
    superheroes.push(newSuperhero);

    // Sending the new superhero as response
    res.status(201).json(newSuperhero);
  } catch (error: any) {
    // Sending an error message
    res.status(500).send("Error creating superhero: " + error.message);
  }
};

export default { getAllSuperheroesHumilityScoreDescending, createNewSuperhero };
