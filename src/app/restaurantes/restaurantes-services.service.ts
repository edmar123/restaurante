import { Restaurante } from './restaurante/restaurante.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/mock/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandle } from 'app/app.error-handle';
import { MenuItem } from 'app/restaurante-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantesServicesService {

  constructor(private http: Http) { }

  restaurantes(): Observable<Restaurante[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      ._catch(ErrorHandle.error)
  }

  getRestauranteById(id:string):Observable<Restaurante>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response=> response.json())
      .catch(ErrorHandle.error)
  }

  getReviewsOfRestaurants(id:string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response=> response.json())
      .catch(ErrorHandle.error)
  }

  getMenuOfRestaurants(id:string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response=> response.json())
      .catch(ErrorHandle.error)
  }
}
