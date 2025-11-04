import { Link } from "react-router-dom";

export default function BannerBox() {
  return (
    <section className="section-container banner-box mb-10">
      <div className="section-container bg-[#F8EFEA] relative overflow-hidden">
        <div className=" absolute top-12 sm:-top-12 left-1/2 z-0">
          <img
            className="w-full h-full object-cover"
            src="/images/secure-delivery.png"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center p-6 gap-2 relative z-10">
          <p className="text-[#00B853] text-center sm:text-left">
            <span className="font-bold">100% Secure delivery</span> without
            contacting the courier
          </p>
          <Link
            className="capitalize flex items-center gap-2 bg-[#00B853]/90 text-white py-2 px-4 hover:bg-[#00B853] rounded-full w-fit"
            to={"/shop"}
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
