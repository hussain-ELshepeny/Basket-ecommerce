import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function SectionHeading({ headingText, spanText }) {
  return (
    <div className="flex justify-between items-center">
      <div className="mb-(--section-margin)">
        <h2 className="text-heading uppercase font-body font-semibold leading-6 text-[16px] sm:text-[20px] tracking-[0px]">
          {/* semibold == 600 */}
          {headingText}
        </h2>
        <span className="text-subHeading inline-block max-w-[200px] sm:max-w-[300px] font-subHeading font-normal leading-[18px] text-[12px] tracking-[-0.1px]">
          {spanText}
        </span>
      </div>
      <button className="flex gap-2 text-standard items-center cursor-pointer rounded-[30px] px-2 sm:px-5 py-1 border border-[#D9D9E9] text-[#9B9BB4]">
        View All <MdOutlineArrowRightAlt className="hidden sm:block" />
      </button>
    </div>
  );
}
