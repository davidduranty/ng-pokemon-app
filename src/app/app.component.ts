import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: 'app.component.html',
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe]

})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    // if (pokemon) {
    //   console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
    //   this.pokemonSelected = pokemon;
    // } else {
    //   console.log(`Vous avez demandé un pokemon qui n'existe pas`);
    //   this.pokemonSelected = pokemon
    // }
    this.pokemonSelected = pokemon ? pokemon : undefined;
  console.log(pokemon 
    ? `Vous avez cliqué sur le pokemon ${pokemon.name}`
    : `Vous avez demandé un pokémon qui n'existe pas`);
  }
}
