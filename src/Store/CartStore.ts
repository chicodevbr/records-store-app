import { makeAutoObservable } from 'mobx';
import { Record } from '../Types';

const CartStore = () =>
  makeAutoObservable({
    items: [] as Record[],
    list: {
      items: [],
      amount: Number,
    },

    add(_id: string, name: string, price: number, amount: number) {
      const existingCartItemIndex = this.items.findIndex(
        (item) => item.id === _id
      );
      const existCartItem = this.items[existingCartItemIndex];

      let updatedItems: Record[];

      if (existCartItem) {
        const updatedItem = {
          ...existCartItem,
          amount: existCartItem.amount + amount,
        };
        updatedItems = [...this.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        this.items.push({
          id: _id,
          name: name,
          price: price,
          amount: amount,
        });
      }
    },

    remove(record: Record) {
      this.items = this.items.filter((r) => r.id !== record.id);
    },
  });

export default CartStore;
