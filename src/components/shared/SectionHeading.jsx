export default function SectionHeading({ headingText, spanText }) {
  return (
    <div className="mb-[var(--section-margin)]">
      <h2 className="text-heading uppercase font-body font-semibold leading-[24px] text-[20px] tracking-[0px]">
        {/* semibold == 600 */}
        {headingText}
      </h2>
      <span className="text-subHeading font-subHeading font-[400] leading-[18px] text-[12px] tracking-[-0.1px]">
        {spanText}
      </span>
    </div>
  );
}
