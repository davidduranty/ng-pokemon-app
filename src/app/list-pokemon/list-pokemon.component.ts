import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterModule],
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

 
}
