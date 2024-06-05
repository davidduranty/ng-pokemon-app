import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS
  }

  getPokemonById(PokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == PokemonId);
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
  updatePokemon(pokemon: Pokemon): void {
    const index = POKEMONS.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      POKEMONS[index] = pokemon;
    }
  }
}
