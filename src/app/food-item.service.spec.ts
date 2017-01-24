/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodItemService } from 'app/food-item.service';

describe('FoodItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodItemService]
    });
  });

  it('should ...', inject([FoodItemService], (service: FoodItemService) => {
    expect(service).toBeTruthy();
  }));
});
