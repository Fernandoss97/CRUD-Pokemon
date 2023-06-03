import express from "express";
import PokemonsController from "../controllers/pokemonsController.js";

const router = express.Router();

router
  .get("/pokemons", PokemonsController.listarPokemons)

export default router;