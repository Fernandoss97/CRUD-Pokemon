import express from "express";
import PokemonsController from "../controllers/pokemonsController.js";

const router = express.Router();

router
  .get("/pokemons", PokemonsController.listarPokemons)
  .get("/pokemons/:id", PokemonsController.bucaPokemonporId)
  .post("/pokemons", PokemonsController.cadastrarPokemon)
  .put("/pokemons/:id", PokemonsController.atualizarPokemon)
  .delete("/pokemons/:id", PokemonsController.excluirPokemon)
export default router;