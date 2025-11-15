export default function BlogBox({ imageUrl, title }) {
  return (
    <div className="mb-10">
      <div>
        <img src={`${imageUrl}`} alt="" loading="lazy" />
      </div>
      <p className="uppercase text-subHeading py-4">Grocery</p>
      <h1 className="text-2xl sm:text-4xl font-semibold">{title}</h1>
      <p className="text-subHeading pt-3 pb-6">
        Jan 13 2025 <span className="font-bold">Sinan ISIK</span>
      </p>
      <p>
        Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed
        convallis ultricies, ante eros laoreet libero, vitae suscipit lorem
        turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
      </p>
    </div>
  )
}
