import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';


@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [FormsModule, CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  types: string[];
  constructor( private pokemonService: PokemonService, private router: Router) { }
  
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();

  }

  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked
    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } 
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false
    }

    return true
  }
}
