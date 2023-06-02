import express from "express";
import { v4 as uuidv4 } from 'uuid';

// const { Pokemon, pokemons } = require('./config/database.js')

const app = express()

app.use(express.json())

// const pokemons = [
//   {id: 1, "name": "Pikachu"},
//   {id: 2, "name": "Bulbassaur"}
// ]

class Pokemon{
  constructor(id, attack, defense, hp, name, pokedex_number, speed, type1, type2, is_legendary, createdAt,  updatedAt){
    
    this.id = id;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.name = name;
    this.pokedex_number = pokedex_number;
    this.speed = speed;
    this.type1 = type1;
    this.type2 = type2;
    this.is_legendary = is_legendary;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const pokemons = [];

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
  const {attack, defense, hp, name, speed, type1, type2, is_legendary} = req.body;
  const id = uuidv4();
  const pokedex_number = pokemons.length;
  const createdAt = new Date();

  const newPokemon = {id, attack, defense, hp, name, pokedex_number: pokedex_number + 1, speed, type1, type2, is_legendary, createdAt};
  pokemons.push(newPokemon);

  // pokemons.push(req.body);
  res.status(201).send('Pokemon cadastrado com sucesso')
})

app.put('/pokemons/:id', (req,res) =>{
  let index = buscaPokemon(req.params.id);
  const {id} = req.params;
  const {attack, defense, hp, name, speed, type1, type2, is_legendary} = req.body;
  const updatedAt = new Date();

  // if(!index){
  //   return res.status(404).json({error: 'Pokemon não encontrado'});
  // }

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