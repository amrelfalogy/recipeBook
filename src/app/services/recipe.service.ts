import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe(
      'steak',
      'steak is a meat on gril',
      'https://www.foodandwine.com/thmb/w2stkbDF7NsURo5muKWZQI8LGNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hanger-steak-with-kimchi-glaze-and-miso-butter-grilled-vegetables-FT-RECIPE0720-6bc40e4bb70a47778bcc618c5ffb9a16.jpg',
      [new ingredient('Meat', 1), new ingredient('Fries', 10)]
    ),
    new Recipe(
      'Welldone Steak',
      'Welldone Steak is a meat on gril',
      'https://www.foodandwine.com/thmb/w2stkbDF7NsURo5muKWZQI8LGNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hanger-steak-with-kimchi-glaze-and-miso-butter-grilled-vegetables-FT-RECIPE0720-6bc40e4bb70a47778bcc618c5ffb9a16.jpg',
      [new ingredient('Buns', 2), new ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipe.slice();
  }

  addIngrToShoppingList(ingredients: ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
