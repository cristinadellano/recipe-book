import { Injectable } from '@angular/core';
import { IRecipe } from '../recipes/recipe.model';
import { IIngredients } from './ingredients.model';

@Injectable()
export class IngredientService {
    getAllIngredients() {
        return Ingredients;
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