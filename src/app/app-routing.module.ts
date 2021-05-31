import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserComponent} from './user-login/user-login.component';
// import { RecipesComponent} from './recipes/recipes.component';
import { RecipeComponent} from './recipe/recipe.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'user-login'},
  // { path: 'user-login', component: UserComponent },
  // { path: 'recipes', component: RecipesComponent },
  // { path: 'recipes/:id', component: RecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
