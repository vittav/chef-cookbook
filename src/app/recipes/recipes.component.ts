import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Recipe: any = [];
  title = 'client-side-solution';

  constructor(private recipeService: RecipeService,
              private userService: UserService,
              private router: Router
    ) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    return this.recipeService.getRecipes().subscribe((data: {}) => {
      this.Recipe = data;
    });
  }


  logout() {
    this.userService.clearStorage();
    this.router.navigate(['']);
  }
}