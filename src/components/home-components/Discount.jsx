export default function Discount() {
  return (
    <section className="section-container discount-box my-10">
      <div className="section-container bg-[#FFEEF2]">
        <div className="flex flex-col sm:flex-row justify-center items-center p-6 gap-4">
          <p className="text-red text-center sm:text-left font-semibold">
            Super discount for your
            <span className="font-bold underline"> first purchase.</span>
          </p>
          <span className="text-red font-bold py-1 px-4 border-2 border-dashed rounded-full border-[#FF6048] ">
            FREE25BAC
          </span>
          <span className="text-standard text-subHeading">
            Use discount code in checkout!
          </span>
        </div>
      </div>
    </section>
  );
}
