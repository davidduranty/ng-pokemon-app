import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api'
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
    return { POKEMONS };
  }
}
