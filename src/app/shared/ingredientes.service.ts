import { Injectable, EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs';

import { IIngredients } from './ingredients.model';

@Injectable()
export class IngredientService {

    ingredientsChanged = new Subject<IIngredients[]>();
    
    getAllIngredients() {
        return Ingredients;
    }

    saveNewIngredient(ingredient: IIngredients) {
        Ingredients.push(ingredient);
    }

    addIngredients(ingredients: IIngredients[]) {
        for(let ingredient of ingredients) {
            this.saveNewIngredient(ingredient);
        }
    }

}

const Ingredients: IIngredients[] = [
    {
        name: 'aple',
        amount: 5
    },
    {
        name: 'tomato',
        amount: 3
    },
    {
        name: 'grapes',
        amount: 1
    },
    {
        name: 'mango',
        amount: 7
    },
]