import { makeAutoObservable } from 'mobx';
import { ListCart, Record } from '../Types';

const CartStore = () =>
  makeAutoObservable({
    items: [] as Record[],
    list: [] as ListCart[],
    toggle: false,

    add(_id: string, name: string, price: number, quantity: number) {
      const itemIdex = this.items.findIndex((i) => i.id === _id);

      const cartExistItem = this.items[itemIdex];

      if (cartExistItem) {
        const updatedItem = {
          ...cartExistItem,
          quantity: cartExistItem.quantity + quantity,
        };

        this.items[itemIdex] = updatedItem;
      } else {
        this.items.push({
          id: _id,
          name: name,
          price: price,
          quantity: quantity,
        });
        this.toggleCart();
      }
    },

    remove(record: Record) {
      this.items = this.items.filter((r) => r.id !== record.id);
    },

    toggleCart() {
      this.toggle = !this.toggle;
    },
  });

export default CartStore;
