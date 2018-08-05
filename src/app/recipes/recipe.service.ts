import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1',
            'This is simply a test 1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZcsUvjI4tw6xqwg-eq12Qf3G2swIBPQHzitUTNpSRv-Cy0EH',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]
        ),
        new Recipe('A Test Recipe 2',
            'This is simply a test 2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZcsUvjI4tw6xqwg-eq12Qf3G2swIBPQHzitUTNpSRv-Cy0EH',
            [new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }


}