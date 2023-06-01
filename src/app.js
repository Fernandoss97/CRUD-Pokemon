import express from "express";

const app = express()

app.use(express.json())

const pokemons = [
  {id: 1, "name": "Pikachu"},
  {id: 2, "name": "Bulbassaur"}
]

app.get('/', (req,res) =>{
  res.status(200).send('Pokemon');
})

app.get('/pokemons', (req,res) =>{
  res.status(200).json(pokemons)
})

app.get('/pokemons/:id', (req,res) =>{
  let index = buscaPokemon(req.params.id);
  res.json(pokemons[index]);
})

app.post('/pokemons', (req, res) =>{
  pokemons.push(req.body);
  res.status(201).send('Pokemon cadastrado com sucesso')
})

app.put('/pokemons/:id', (req,res) =>{
  let index = buscaPokemon(req.params.id);
  pokemons[index].name = req.body.name;
  res.json(pokemons);
})

app.delete('/pokemons/:id', (req,res) =>{
  let {id} = req.params;
  let index = buscaPokemon(id);
  pokemons.splice (index, 1);
  res.send(`Pokemon ${id} removido com sucesso`);
})

function buscaPokemon(id){
  return pokemons.findIndex(pokemon => pokemon.id == id);
}

export default app