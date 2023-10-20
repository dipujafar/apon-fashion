import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cartData = useLoaderData();
  return (
    <div className="mt-10 min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cartData.map((product) => (
          <CartProduct key={product._id} product={product}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
