import { observable, computed, action, when } from 'mobx';

export default class ShoppingCartEntry {
  @observable quantity = 1;

  @action
  increaseQuantity() {
    this.quantity++;
  }

  @action
  decreaseAmount() {
    this.quantity--;
  }

  @action
  removeFromCart() {
    this.quantity = 0;
  }
}
