import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
