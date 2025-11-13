export default function SocialMedia({ color, imgSrc, children, alt }) {
  return (
    <div className="social-media" style={{ backgroundColor: `#${color}` }}>
      <img src={imgSrc} alt={alt} />{" "}
      <span className="uppercase">{children}</span>
    </div>
  );
}
