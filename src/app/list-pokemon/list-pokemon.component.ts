import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterModule],
  templateUrl: './list-pokemon.component.html',
  providers:[PokemonService]
  
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  
  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList()
  }
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
 
}
