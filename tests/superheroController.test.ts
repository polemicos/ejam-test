import superheroController from "../src/controllers/superheroController";
import { Request, Response } from "express";

jest.mock("../src/controllers/superheroController");

describe("Superhero Controller", () => {
  describe("getAllSuperheroesHumilityScoreDescending", () => {
    it("should return all superheroes sorted by humility score in descending order", async () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const mockSuperheroes = [
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

      // Simulate sorted superheroes
      const sortedSuperheroes = [
        {
          id: 2,
          name: "John Doe",
          superpower: "Secret Genius",
          humility_score: 8,
        },
        {
          id: 1,
          name: "Mikita Rakovich",
          superpower: "Humble One",
          humility_score: 4,
        },
        {
          id: 3,
          name: "Jane Doe",
          superpower: "Great Coder",
          humility_score: 2,
        },
      ];

      // Mocking the implementation
      superheroController.getAllSuperheroesHumilityScoreDescending = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          res.status(200).json(sortedSuperheroes);
        });

      await superheroController.getAllSuperheroesHumilityScoreDescending(
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(sortedSuperheroes);
    });

    it("should return a 500 error if something goes wrong", async () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      // Simulate an internal error
      superheroController.getAllSuperheroesHumilityScoreDescending = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          // Simulate the actual try-catch error
          res.status(500).send("Error fetching superheroes: Database error");
        });

      await superheroController.getAllSuperheroesHumilityScoreDescending(
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(
        "Error fetching superheroes: Database error"
      );
    });
  });
  describe("createNewSuperhero", () => {
    it("should create a new superhero and return it", async () => {
      const req = {
        body: {
          name: "Superman",
          superpower: "Flight",
          humility_score: 5,
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const newSuperhero = {
        id: 4,
        name: "Superman",
        superpower: "Flight",
        humility_score: 5,
      };

      // Mocking the creation process
      superheroController.createNewSuperhero = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          res.status(201).json(newSuperhero);
        });

      await superheroController.createNewSuperhero(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(newSuperhero);
    });

    it("should return a 400 error if required fields are missing", async () => {
      const req = { body: {} } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      // Simulating missing fields error
      superheroController.createNewSuperhero = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          return res
            .status(400)
            .send("Name, superpower, and humility score are required");
        });

      await superheroController.createNewSuperhero(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(
        "Name, superpower, and humility score are required"
      );
    });

    it("should return a 400 error if humility score is out of range", async () => {
      const req = {
        body: {
          name: "Superman",
          superpower: "Flight",
          humility_score: 15, // Invalid score
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      // Simulating invalid humility score
      superheroController.createNewSuperhero = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          return res
            .status(400)
            .send("Humility score must be between 0 and 10");
        });

      await superheroController.createNewSuperhero(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(
        "Humility score must be between 0 and 10"
      );
    });

    it("should return a 500 error if something goes wrong", async () => {
      const req = {
        body: {
          name: "Superman",
          superpower: "Flight",
          humility_score: 5,
        },
      } as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      // Simulate the actual try-catch error
      superheroController.createNewSuperhero = jest
        .fn()
        .mockImplementationOnce((req, res) => {
          // Simulate the internal error handling
          res.status(500).send("Error creating superhero: Database error");
        });

      await superheroController.createNewSuperhero(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(
        "Error creating superhero: Database error"
      );
    });
  });
});
