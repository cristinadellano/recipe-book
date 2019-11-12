import { Component, OnInit, Input } from '@angular/core';
import { IngredientService } from '../shared/ingredientes.service';
import { IIngredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IIngredients[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getAllIngredients();
  }

  onEditItem(index: number) {
    this.ingredientService.startedEditing.next(index);
  }

}
