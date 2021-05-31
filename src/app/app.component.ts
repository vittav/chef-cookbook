import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';
// import { Router } from '@angular/router';
// import { Recipe } from './models/recipe';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // recipe = {} as Recipe;
  // recipes: Recipe[] = [];
  Recipe: any = [];
  title = 'client-side-solution';
  
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.getRecipes()
  }
  
  getRecipes() {
    return this.recipeService.getRecipes().subscribe((data: {}) => {
      this.Recipe = data;
      // console.log(this.Recipe.data)
    });
  }
}
