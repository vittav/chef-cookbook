import { Component, OnInit, Output, TemplateRef } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  @Output() btnClick = new EventEmitter();

  recipeData: any = {};
  title = 'client-side-solution';
  active: boolean = true;


  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.getRecipe()
  }

  getRecipe() {
    return this.recipeService.getRecipe(this.id).subscribe((data) => {
      this.recipeData = data;
    });
  }

  finish() {
    this.router.navigate(['/recipes']);
    alert("Muito obrigado! Prato finalizado com sucesso.")
  }

  check($event: any) {
    $event.target.classList.toggle('done');
    const buttons = document.querySelectorAll('.checkbox');
    const buttonsQuantity = buttons.length;
    const checksQuantity = document.querySelectorAll('.done').length;
    if (buttonsQuantity === checksQuantity){
      this.active = false;
    } else {
      this.active = true;
    }
  }
}



