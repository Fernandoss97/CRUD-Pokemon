export class Pokemon{
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

export const pokemons = [];


