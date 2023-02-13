import { makeAutoObservable } from 'mobx';
import { Record } from '../Types';

const CartStore = () =>
  makeAutoObservable({
    items: [] as Record[],
    toggle: false,
    totalQuantity: 0,
    totalPrice: 0,

    add(
      _id: string,
      name: string,
      imgUrl: string,
      price: number,
      quantity: number
    ) {
      const itemIdex = this.items.findIndex((i) => i.id === _id);

      const cartExistItem = this.items[itemIdex];

      if (cartExistItem) {
        const updatedItem = {
          ...cartExistItem,
          quantity: cartExistItem.quantity + quantity,
          amount: cartExistItem.amount + quantity * price,
        };

        this.items[itemIdex] = updatedItem;

        this.getTotalPrice();
        this.getTotalQuantity();
      } else {
        this.items.push({
          id: _id,
          name: name,
          price: price,
          imgUrl: imgUrl,
          quantity: quantity,
          amount: quantity * price,
        });

        this.getTotalPrice();
        this.getTotalQuantity();
      }
    },

    remove(record: Record) {
      this.items = this.items.filter((r) => r.id !== record.id);
    },

    toggleCart() {
      this.toggle = !this.toggle;
    },

    getTotalPrice() {
      this.totalPrice = this.items
        .map((i) => i.amount)
        .reduce((acc, current) => acc + current, 0);
    },

    getTotalQuantity() {
      this.totalQuantity = this.items
        .map((i) => i.quantity)
        .reduce((acc, current) => acc + current, 0);
    },
  });

export default CartStore;
