import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[] | null> =
    new BehaviorSubject<Ingredient[] | null>(null);

  constructor() {}

  public addToPanier(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value;
    console.log(currentValue);
    if (currentValue) {
      const fullArray = [...currentValue, ...ingredients];
      const obj = fullArray.reduce(
        (acc: { [x: string]: number }, value: Ingredient) => {
          if (acc[value.name]) {
            acc[value.name] += value.quantity;
          } else {
            acc[value.name] = value.quantity;
          }
          return acc;
        },
        {}
      );
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key],
      }));
      this.ingredients$.next(result);
      console.log(result);
    } else {
      this.ingredients$.next(ingredients);
    }
  }
}
