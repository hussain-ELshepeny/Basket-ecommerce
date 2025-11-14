import { Link } from "react-router-dom"
import CheckoutProduct from "./CheckoutProduct"

export default function CheckoutCart({ cart }) {
  console.log(cart.length)
  return (
    <section className="space-y-4 ">
      {/* pl-[39px] */}
      {cart?.length !== 0 ? (
        cart.map((product, index) => (
          <CheckoutProduct
            key={index}
            img={product?.Image?.url}
            name={product.name}
            price={product.price}
            qty={product.quantity}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-semibold text-2xl sm:text-3xl italic">
            Cart Is Empty
          </h1>
          <Link
            to={"/shop"}
            className={`flex items-center gap-2 mb-10 px-3 xl:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm xl:text-base ${"text-gray-600 hover:bg-primary/5 hover:text-primary hover:scale-105"}`}
          >
            Add Some Products
            <img className="w-4" src="/images/shop.jpg" alt="" />
          </Link>
        </div>
      )}
    </section>
  )
}
