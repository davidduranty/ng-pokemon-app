import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a (click)="goToHome()" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { 
  pokemonList: Pokemon[] = POKEMONS;
  constructor(private router: Router) { }
  
  goToHome() {
    this.router.navigate(['/pokemons']);
  }

}
