import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IngredientService } from 'src/app/shared/ingredientes.service';
import { Subscription } from 'rxjs';
import { IIngredients } from 'src/app/shared/ingredients.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('newIngredientForm') slForm: NgForm;
  subscription: Subscription;
  name: string;
  amount: number;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: IIngredients;
  constructor(private ingService: IngredientService) { }

  ngOnInit() {
    this.subscription = this.ingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.ingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  saveIngredient(formValues) {
    if (this.editMode) {
      this.ingService.updateIngredient(this.editedItemIndex, formValues);
    } else {
      this.ingService.saveNewIngredient(formValues);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onDeleteIngredient() {
    this.onClear();
    this.ingService.deleteIngredient(this.editedItemIndex);
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
