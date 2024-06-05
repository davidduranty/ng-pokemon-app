import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    template: `
    <h2 class="center">Editer {{pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="{{ pokemon.name }}">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
    styles: [],
  imports: [CommonModule, PokemonFormComponent],
  providers: [PokemonService]
  })
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(private router: ActivatedRoute, private pokemonService: PokemonService ) { }
  
  ngOnInit(): void {
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
   }
}
