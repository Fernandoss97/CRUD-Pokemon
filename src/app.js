import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Pokemon, pokemons } from "./config/database.js";
//import routes from "./routes/index.js";


const app = express();

app.use(express.json());
//routes(app)

app.get('/', (req,res) =>{
  res.status(200).send('Pokemon');
})

app.get("/pokemons", (req, res) => {

  if ((pokemons.length) < 1) {
    res.send('Não há Pokemons cadastrados');
  }

  const query = req.query;
  console.log(query);

  res.status(200).json(pokemons);
});

app.get("/pokemons/:id", (req, res) => {
  let index = buscaPokemon(req.params.id);

   if(index === -1){
     return res.status(404).json({error: 'Pokemon não encontrado'});
   }

  res.json(pokemons[index]);
});

app.post("/pokemons", (req, res) => {

  // if(pokemons.findIndex((pokemon)=> pokemon.id === req.params.id)){
  //   return res.status(400).json({error: 'Pokemon já cadastrado'})
  // }

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
});

app.put("/pokemons/:id", (req, res) => {
  let index = buscaPokemon(req.params.id);
  const { id } = req.params;
  const { attack, defense, hp, name, speed, type1, type2, is_legendary } =
    req.body;
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
});

app.delete("/pokemons/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaPokemon(id);
  pokemons.splice(index, 1);
  res.send(`Pokemon ${id} removido com sucesso`);
});

function buscaPokemon(id) {

  return pokemons.findIndex((pokemon) => pokemon.id == id);
}

export default app;
