import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { IIngredients } from 'src/app/shared/ingredients.model';
import { IngredientService } from 'src/app/shared/ingredientes.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  name: string;
  amount: number;
  constructor(private ingService: IngredientService) { }

  ngOnInit() {
  }

  saveIngredient(formValues) {
    this.ingService.saveNewIngredient(formValues);
  }

}
