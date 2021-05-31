import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Recipe: any = [];
  title = 'client-side-solution';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    return this.recipeService.getRecipes().subscribe((data: {}) => {
      this.Recipe = data;
    });
  }
}