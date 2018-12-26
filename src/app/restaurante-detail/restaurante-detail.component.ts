import { Component, OnInit } from '@angular/core';
import { RestaurantesServicesService } from 'app/restaurantes/restaurantes-services.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css']
})
export class RestauranteDetailComponent implements OnInit {

  restaurante:Restaurante
  
  constructor(private restauranteService: RestaurantesServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.getRestauranteById(this.route.snapshot.params['id'] )
      .subscribe(restaurante=> this.restaurante = restaurante)
  }

}
