import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/shared/ingredient';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('salt', 3),
    new Ingredient('bananan', 2),
    new Ingredient('strubary', 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
