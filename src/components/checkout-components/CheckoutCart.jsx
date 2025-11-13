import { useCart } from "../../hooks/useCart"
import CheckoutProduct from "./CheckoutProduct"

export default function CheckoutCart() {
  const { getCart } = useCart()
  const { data: cartProductsData, isPending } = getCart
  // const cartProducts = cartProductsData?.cart || []
  console.log(cartProductsData)

  const cart = [
    {
      img: "/images/product-image.png",
      name: "All Natural Italian-Style Chicken Meatballs",
      price: "7.25",
      qty: 1,
    },
    {
      img: "/images/cocacola.png",
      name: "Coca-Cola – 2 L Bottle",
      price: "3.85",
      qty: 1,
    },
    {
      img: "/images/lactose.png",
      name: "Fairlife Lactose-Free 2% Milk",
      price: "3.69",
      qty: 1,
    },
  ]
  return (
    <section className="space-y-4 ">
      {/* pl-[39px] */}
      {cart.map((product, index) => (
        <CheckoutProduct
          key={index}
          img={product.img}
          name={product.name}
          price={product.price}
          qty={product.qty}
        />
      ))}
    </section>
  )
}
