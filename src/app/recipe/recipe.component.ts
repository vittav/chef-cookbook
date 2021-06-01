import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];

  recipeData: any = {};
  title = 'client-side-solution';

  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipe()
  }

  getRecipe() {
    return this.recipeService.getRecipe(this.id).subscribe((data) => {
      this.recipeData = data;
    });
  }
}