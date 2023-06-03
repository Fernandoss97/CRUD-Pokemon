import { Pokemon, pokemons } from "./config/database.js";

class   PokemonController{

static listarPokemons = (req, res) => {
    res.status(200).json(pokemons)
  }

 }

export default PokemonController;