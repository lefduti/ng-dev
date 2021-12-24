import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-food-row',
  templateUrl: './food-row.component.html',
  styleUrls: ['./food-row.component.scss'],
})
export class FoodRowComponent {
  @Input() food: FoodItem;
  @Output() onDelete: EventEmitter<FoodItem> = new EventEmitter();

  deleteFood(item: FoodItem) {
    this.onDelete.emit(item);
  }
}
