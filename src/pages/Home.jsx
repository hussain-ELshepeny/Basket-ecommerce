import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    //-------------Start offer section--------------------
    <section className="offer section-container py-10 grid grid-cols-1 sm:grid-cols-4 gap-5">
      <div className="bg-[url(/images/offer1.png)] bg-center bg-no-repeat bg-cover sm:col-span-3 h-auto relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-0"></div>
        <div className="py-10 px-8 sm:px-20 relative z-10">
          <p className="flex flex-col sm:flex-row items-start sm:items-center text-center sm:text-left gap-2 uppercase font-medium">
            Exclusive Offer{" "}
            <span className="text-standard text-primary bg-linear-to-r ml-0 sm:ml-2 from-primary/40 to-gray-200 py-1 px-3 font-bold rounded-full">
              -20% Off
            </span>
          </p>
          <h1 className="text-xl sm:text-4xl lg:text-7xl max-w-xl font-bold py-4 text-secondary">
            Feed your family the best
          </h1>
          <p className="font-medium">Only this week. Don’t miss...</p>
          <p className="py-5 font-medium">
            from{" "}
            <span className="text-2xl sm:text-3xl font-semibold italic text-red">
              $7.99
            </span>
          </p>
          <Link
            className="capitalize flex items-center gap-2 bg-primary/90 text-white py-2 px-4 hover:bg-primary rounded-full w-fit"
            to={"/shop"}
          >
            Shop now <MdOutlineArrowRightAlt />
          </Link>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src="/images/offer2.png"
          alt=""
        />
      </div>
      <div className="bg-[url(/images/offer3.png)] bg-center bg-no-repeat bg-cover h-auto sm:col-span-2 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 sm:bg-black/5 z-0"></div>
        <div className="sm:w-fit flex flex-col items-center sm:items-start sm:ml-auto py-12 px-5 sm:px-10 relative z-10">
          <p className="text-[20px] sm:text-[24px] font-extralight text-white sm:text-[#202435] ">
            Everything is so fresh
          </p>
          <p className=" text-white sm:text-secondary capitalize font-bold text-2xl sm:text-3xl py-1 ">
            only in Bacola
          </p>
          <p className="text-standard text-white sm:text-[#9B9BB4] pb-4">
            Bacola Weekend Discount
          </p>
          <Link
            className="capitalize flex items-center gap-2 bg-buttonBackground/90 text-white py-2 px-4 hover:bg-buttonBackground rounded-full w-fit"
            to={"/shop"}
          >
            Shop now
          </Link>
        </div>
      </div>
      <div className="bg-[url(/images/offer4.png)] bg-center bg-no-repeat bg-cover h-auto sm:col-span-2 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 sm:bg-black/5 z-0"></div>
        <div className="sm:w-fit flex flex-col items-center sm:items-start sm:ml-auto py-12 px-5 sm:px-10 relative z-10">
          <p className="text-[24px] font-extralight text-white sm:text-[#202435] ">
            Big discount on
          </p>
          <p className=" text-white sm:text-secondary capitalize font-bold text-2xl sm:text-3xl py-1 ">
            organic legumes
          </p>
          <p className="text-standard text-white sm:text-[#9B9BB4] pb-4">
            Bacola Weekend Discount
          </p>
          <Link
            className="capitalize flex items-center gap-2 bg-buttonBackground/90 text-white py-2 px-4 hover:bg-buttonBackground rounded-full w-fit"
            to={"/shop"}
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
    //-------------End offer section--------------------
  );
}
