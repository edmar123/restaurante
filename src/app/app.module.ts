import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantesServicesService } from './restaurantes/restaurantes-services.service';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuComponent } from './restaurante-detail/menu/menu.component';
import { CarrinhoComprasComponent } from './restaurante-detail/carrinho-compras/carrinho-compras.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { CarrinhoService } from './restaurante-detail/carrinho-compras/CarrinhoService';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetailComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesServicesService, CarrinhoService, {provide:LOCALE_ID, useValue: 'pt-BR'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
