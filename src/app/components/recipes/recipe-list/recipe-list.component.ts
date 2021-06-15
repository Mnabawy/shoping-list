import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'desc of test recipe', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2019/01/iStock-945606006.jpg?x53553')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
