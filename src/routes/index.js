import express from "express";
import pokemons from "./pokemonsRoutes.js";

const routes = (app) =>{
  app.route('/').get((req, res) =>{
    res.status(200).send('Pokemon')
  })

  app.use(express.json())
  app.use(pokemons)
  
 }

export default routes;
