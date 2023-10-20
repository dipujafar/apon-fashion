import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Cart = () => {
  const cartData = useLoaderData();
  const [cartProduct, setCartProduct] = useState(cartData);
  //delete cart product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://apon-fashion2.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = cartProduct.filter(
                (product) => product._id !== id
              );
              setCartProduct(remainingProduct);
              Swal.fire(
                "Deleted!",
                "This Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="mt-10 min-h-screen">
      {cartProduct.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cartProduct.map((product) => (
            <CartProduct
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></CartProduct>
          ))}
        </div>
      ) : (
        <div className="min-h-screen  flex items-center justify-center">
          <h1 className="text-2xl text-red-600">
            <Marquee direction="right">No Product in you cart! {"  "}</Marquee>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
