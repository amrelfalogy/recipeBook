import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnChanges() {
    console.log('Recipe received in RecipeDetailComponent:', this.recipe);
  }

  onAddToShoppingList() {
    this.recipeService.addIngrToShoppingList(this.recipe.ingredients);
  }
}
