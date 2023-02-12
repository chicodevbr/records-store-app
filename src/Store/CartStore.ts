import { makeAutoObservable } from 'mobx';
import { Record } from '../Types';

const CartStore = () =>
  makeAutoObservable({
    items: [] as Record[],
    toggle: false,
    amount: 0,

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
        const updatedAmount =
          quantity + this.items[itemIdex].quantity * this.items[itemIdex].price;
        const updatedItem = {
          ...cartExistItem,
          quantity: cartExistItem.quantity + quantity,
          amount: updatedAmount,
        };

        this.items[itemIdex] = updatedItem;
        this.getAmount(this.items[itemIdex]);
      } else {
        this.items.push({
          id: _id,
          name: name,
          price: price,
          imgUrl: imgUrl,
          quantity: quantity,
          amount: price + quantity * price,
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

    getAmount(items: Record) {
      this.amount = items.quantity * items.price;
    },
  });

export default CartStore;
