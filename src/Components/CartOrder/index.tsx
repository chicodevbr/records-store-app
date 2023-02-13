import CartOrderList from './CartOrderList';
import DefaultPage from '../../Templates/DefaultPage';
import Order from './Order';
import { useStore } from '../../Store';

const CartOrder = () => {
  const { cart } = useStore();
  return (
    <DefaultPage>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <CartOrderList />
        </div>
        <div className="w-14 h-14 m-7">
          <Order total={cart.totalPrice} quantity={cart.totalQuantity} />
        </div>
      </div>
    </DefaultPage>
  );
};

export default CartOrder;
