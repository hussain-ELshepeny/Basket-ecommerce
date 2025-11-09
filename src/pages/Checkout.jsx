import CheckoutCart from "../components/checkout-components/CheckoutCart"
import CheckoutForm from "../components/checkout-components/CheckoutForm"
import OrderSummary from "../components/checkout-components/OrderSummary"
import Header from "../components/Header"
import Nav from "../components/Nav"
export default function Checkout() {
  return (
    <>
      <Nav />
      <div className="mb-5 sm:mb-[50px]">
        <Header />
      </div>
      <main className="section-container flex flex-col mb-[120px] lg:flex-row">
        <CheckoutForm />
        <div className="flex flex-col mt-[60px] md:px-[39px] px-5">
          <CheckoutCart />
          <OrderSummary />
        </div>
      </main>
    </>
  )
}
