import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountinputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountinputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }
}
