import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantesServicesService } from 'app/restaurantes/restaurantes-services.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  reviews: Observable<any> 
  constructor(private restauranteService: RestaurantesServicesService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService.getMenuOfRestaurants(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
