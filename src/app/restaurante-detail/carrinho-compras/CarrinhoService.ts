import { Injectable } from '@angular/core';
import { CarrinhoItem } from './carrinho-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class CarrinhoService {

    items:CarrinhoItem[] = []

  constructor() { }

  clear(){
    this.items = []
  }

  removeItem(item:CarrinhoItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  addItem(item:MenuItem){
    /**
     * @author edmar soares
     * comopara um item da lista com o item que está vindo como parametro

     */
    let foundItem = this.items.find(mItem=> mItem.menuItem.id === item.id)

    if (foundItem) {
      // se o item.id for igual ao do parametro , adiciona + 1
        foundItem.quantity = foundItem.quantity + 1
    } else {
        this.items.push(new CarrinhoItem(item))
    }
  }

  //totaliza o total 
  total():number{
      return this.items
      .map(item=>item.value())
      .reduce((prev, value)=> prev+ value, 0)
  }

}