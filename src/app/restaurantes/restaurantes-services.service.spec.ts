import { TestBed, inject } from '@angular/core/testing';

import { RestaurantesServicesService } from './restaurantes-services.service';

describe('RestaurantesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantesServicesService]
    });
  });

  it('should be created', inject([RestaurantesServicesService], (service: RestaurantesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
