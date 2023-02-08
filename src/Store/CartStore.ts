import { makeAutoObservable } from 'mobx';
import { Record } from '../Types';

const CartStore = () =>
  makeAutoObservable({
    cart: [] as Record[],

    add(_id: string, name: string, price: string) {
      this.cart.push({
        id: _id,
        name: name,
        price: price,
      });
    },

    remove(record: Record) {
      this.cart = this.cart.filter((r) => r.id !== record.id);
    },
  });

export default CartStore;
