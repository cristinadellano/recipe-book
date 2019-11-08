import { Injectable, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<IRecipe>()
    getAllRecipes() {
        return Recipe;
    }

}

const Recipe: IRecipe[] = [
    {
        id: 1,
        name: 'Simple spaghetti with olive oil, garlic and chilli',
        description: 'No need for fancy sauces',
        dateCreated: new Date('12/18/2011'),
        imageUrl: '/assets/images/spaguettis.jpg',
        ingredients: [
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            }
        ]
    },
    {
        id: 2,
        name: 'The ultimate roast chicken',
        description: 'Because you cannot go round to your mum every Sunday.',
        dateCreated: new Date('9/26/2020'),
        imageUrl: '/assets/images/chicken.jpg',
        ingredients: [
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            }
        ]
    },
    {
        id: 3,
        name: 'Shepherd pie',
        description: 'The ultimate comfort food.',
        dateCreated: new Date('3/26/2021'),
        imageUrl: '/assets/images/pie.jpg',
        ingredients: [
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            }
        ]
    },
    {
        id: 4,
        name: 'A cracking stir fry',
        description: 'Stir-fries are healthy, quick and very versatile',
        dateCreated: new Date('5/15/2010'),
        imageUrl: '/assets/images/shrimp.jpg',
        ingredients: [
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            }
        ]
    },
    {
        id: 5,
        name: 'Easy baked fish',
        description: 'Do not be intimidated by fish',
        dateCreated: new Date('8/10/2015'),
        imageUrl: '/assets/images/seabass.jpg',
        ingredients: [
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            },
            {
                name: 'apples',
                amount: 4,
            }
        ]
    },
]