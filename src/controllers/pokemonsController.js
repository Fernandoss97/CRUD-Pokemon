import { v4 as uuidv4 } from "uuid";

export const pokemons = [];

class PokemonController {
  static listarPokemons = (req, res) => {
    if (pokemons.length < 1) {
      res.send("Não há Pokemons cadastrados");
    }

    const query = req.query;
    console.log(query);
    res.status(200).json(pokemons);
  };

  static bucaPokemonporId = (req, res) => {
    const { id } = req.params;
    const index = pokemons.findIndex((pokemon) => pokemon.id == id);
    if (index === -1) {
      return res.status(404).json({ error: "Pokemon não encontrado" });
    }

    res.json(pokemons[index]);
  };

  static cadastrarPokemon = (req, res) => {
    const { attack, defense, hp, name, speed, type1, type2, is_legendary } =
      req.body;
    const id = uuidv4();
    const pokedex_number = pokemons.length;
    const createdAt = new Date();

    const newPokemon = {
      id,
      attack,
      defense,
      hp,
      name,
      pokedex_number: pokedex_number + 1,
      speed,
      type1,
      type2,
      is_legendary,
      createdAt,
    };
    pokemons.push(newPokemon);

    res.status(201).send("Pokemon cadastrado com sucesso");
  };

  static atualizarPokemon = (req, res) => {
    const { id } = req.params;
    let index = pokemons.findIndex((pokemon) => pokemon.id == id);

    const updatedAt = new Date();

    pokemons[index].attack = req.body.attack;
    pokemons[index].defense = req.body.defense;
    pokemons[index].hp = req.body.hp;
    pokemons[index].name = req.body.name;
    pokemons[index].speed = req.body.speed;
    pokemons[index].type1 = req.body.type1;
    pokemons[index].type2 = req.body.type2;
    pokemons[index].is_legendary = req.body.is_legendary;
    pokemons[index].updatedAt = updatedAt;

    res.json(pokemons);
  };

  static excluirPokemon = (req, res) => {
    const { id } = req.params;
    const index = pokemons.findIndex((pokemon) => pokemon.id == id);
    if (index === -1) {
      res.status(404).json({ error: "Pokemon não encontrado" });
    } else {
      pokemons.splice(index, 1);
      res.send(`Pokemon ${id} removido com sucesso`);
    }
  };
}

export default PokemonController;
