import { useStore } from '../../../Store';
import Card from './Card';

const CartOrderList = () => {
  const { cart } = useStore();

  return (
    <div className="p-10 w-3/5">
      {cart.items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          quantity={item.quantity}
          total={item.amount}
        />
      ))}
    </div>
  );
};

export default CartOrderList;
