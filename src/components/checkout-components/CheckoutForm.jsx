import { Link } from "react-router-dom"
import { RiMoneyDollarCircleLine } from "react-icons/ri"

export default function CheckoutForm() {
  return (
    <div className="lg:w-[50%] w-full md:px-[50px] px-0 lg:border-r border-[#DEDEDE]">
      <form>
        {/* Contact Part */}
        <div className="flex justify-between mb-[14px] mt-[60px]">
          <h3 className="font-roboto font-bold text-[21px] leading-[25.2px] tracking-normal align-middle">
            Contact
          </h3>
          <Link className="font-roboto font-normal text-[#1773B0] text-[14px] leading-[21px] underline underline-offset-0 decoration-solid align-middle">
            Log in
          </Link>
        </div>
        <input
          type="text"
          className="block pl-[12px] rounded-md py-[16px] border border-[#1773B0] w-full h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px]  placeholder:leading-[100%] placeholder:font-normal font-roboto"
          placeholder="Email or mobile phone number"
        />
        <div className="mt-[14px] mb-[32px] ">
          <input type="checkbox" className="inline-block mr-[11px]" />
          <label className="font-roboto font-normal text-[13.89px] leading-[21px]">
            Email me with news and offers
          </label>
        </div>

        {/* Delivery Part */}
        <h3 className="font-roboto font-bold text-[21px] leading-[25.2px] tracking-normal align-middle mb-[14px]">
          Delivery
        </h3>
        <input
          type="text"
          className="block pl-[12px] rounded-md py-[16px] border border-[#DEDEDE] w-full h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px]  placeholder:leading-[100%] placeholder:font-normal font-roboto"
          placeholder="Email or mobile phone number"
        />
        <div className="my-[14px] flex gap-[14px]">
          <input
            type="text"
            className="pl-[12px]  rounded-md py-[16px] border border-[#DEDEDE] w-[50%] h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
            placeholder="First name (optional) "
          />
          <input
            type="text"
            className="pl-[12px]  rounded-md py-[16px] border border-[#DEDEDE] w-[50%] h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
            placeholder="Last name"
          />
        </div>
        <input
          type="text"
          className="block pl-[12px] mb-[14px] rounded-md py-[16px] border border-[#DEDEDE] w-full h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
          placeholder="Address"
        />
        <input
          type="text"
          className="block pl-[12px] mb-[14px] rounded-md py-[16px] border border-[#DEDEDE] w-full h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
          placeholder="Apartment, suite, etc,(optional)"
        />
        <div className="my-[14px] flex gap-[14px]">
          <input
            type="text"
            className="pl-[12px]  rounded-md py-[16px] border border-[#DEDEDE] w-[50%] h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
            placeholder="Postal code(optional)"
          />
          <input
            type="text"
            className="pl-[12px]  rounded-md py-[16px] border border-[#DEDEDE] w-[50%] h-[50px] placeholder:text-gray-400 lg:placeholder:text-standard  placeholder:text-[13px] placeholder:leading-[100%] placeholder:font-normal font-roboto"
            placeholder="City"
          />
        </div>
        <div className="mt-[14px] mb-[32px] ">
          <input type="checkbox" className="inline-block mr-[11px]" />
          <label className="font-roboto font-normal text-[13.89px] leading-[21px]">
            Save this information for Next Time
          </label>
        </div>
        <h4 className="font-roboto font-bold text-[16px] leading-[25.2px] tracking-normal align-middle mb-[14px]">
          Shipping method
        </h4>

        <div className="space-y-3">
          <div className="border rounded-md p-4 flex mb-[30px] justify-between items-center h-[50px] bg-[#F5F8FF] border border-[#1773B0]">
            <span className="font-roboto text-[14px]">Standard</span>
            <span className="font-roboto text-[14px] font-medium">FREE</span>
          </div>
        </div>

        {/* Payment Section */}
        <div className="space-y-0.5 mb-[16px]">
          <h2 className="font-roboto font-bold mb-[5px] text-[18px]">
            Payment
          </h2>
          <p className="font-roboto mb-[14px] text-[14px] text-gray-500">
            All transactions are secure and encrypted.
          </p>

          {/* Disabled Payment Box */}
          <div className=" rounded-md p-8 bg-[#F5F5F5] h-[128px] flex flex-col justify-center items-center text-center mb-[30px]">
            <RiMoneyDollarCircleLine size={"220px"} color="#B3B3B3" />
            <p className="font-roboto text-[14px] text-gray-500">
              This store can’t accept payments right now.
            </p>
          </div>

          {/* Disabled Pay Now button */}
          <button
            disabled
            className="w-full mb-[40px] py-3 bg-[#F5F5F5] rounded-md h-[56px] font-roboto text-[19px] text-[#707070] font-bold cursor-not-allowed leading-[28.5px] text-center"
          >
            Pay now
          </button>
        </div>

        {/* Privacy Policy */}
        <hr className="border-0 h-[1px] bg-[#F5F5F5] mb-[10px]" />
        <a
          href="#"
          className="text-sm underline text-gray-600 inline-block hover:text-gray-800"
        >
          Privacy policy
        </a>
      </form>
    </div>
  )
}
