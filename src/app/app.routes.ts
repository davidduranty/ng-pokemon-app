import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemons/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
];
