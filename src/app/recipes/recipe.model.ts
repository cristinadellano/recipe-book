import { IIngredients } from '../shared/ingredients.model';

export interface IRecipe {
    name: string,
    description: string,
    dateCreated: Date,
    imageUrl: string,
    ingredients: IIngredients[],
}

