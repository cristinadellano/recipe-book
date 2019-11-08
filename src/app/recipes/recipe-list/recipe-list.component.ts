import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: IRecipe[];

  @Output()
  recipeWasSelected = new EventEmitter<IRecipe>()

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  onRecipeSelected(recipe: IRecipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
