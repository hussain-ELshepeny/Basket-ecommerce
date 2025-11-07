export default function CheckoutProduct({ img, name, price, qty }) {
  return (
    <div className="flex justify-between items-center w-full pb-4">

      <div className="flex items-center gap-4 mr-[30px]">
        <div className="relative">
          <img
            src={img}
            alt={name}
            className="min-w-20 h-20 rounded-md object-contain border"
          />
          <span className="absolute -top-2 -right-2 bg-[#666666] text-white text-xs w-5 h-5 flex font-bold items-center justify-center rounded-full">
            {qty}
          </span>
        </div>
        <p className="font-roboto font-normal text-standard leading-[21px] tracking-normal">
          {name}
        </p>
      </div>
      <p className="font-roboto font-normal text-standard leading-[21px] tracking-normal">
        ${price}
      </p>
    </div>
  );
}
