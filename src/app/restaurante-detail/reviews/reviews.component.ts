import { Component, OnInit } from '@angular/core';
import { RestaurantesServicesService } from 'app/restaurantes/restaurantes-services.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restauranteService: RestaurantesServicesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteService.getReviewsOfRestaurants(this.route.parent.snapshot.params['id'])
  }

}
