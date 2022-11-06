import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://omnivorescookbook.com/wp-content/uploads/2022/10/220810_Tomato-Egg-Stir-Fry_3.jpg'),
    new Recipe('Second Test Recipe', 'This is small description', 
    'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
