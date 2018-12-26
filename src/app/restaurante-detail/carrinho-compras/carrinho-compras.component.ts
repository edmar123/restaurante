import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './CarrinhoService';
import { CarrinhoItem } from './carrinho-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.carrinhoService.items
  }

  total(): number{
    return this.carrinhoService.total()
  }

  clear(){
    this.carrinhoService.clear()
  }

  removeItem(item:CarrinhoItem){
    this.carrinhoService.removeItem(item)
  }

  addItem(item: MenuItem){
    this.carrinhoService.addItem(item)
  }

}
