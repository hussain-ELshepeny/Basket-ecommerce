export default function RecentPost({ imageUrl, title, num }) {
  return (
    <div className="flex sm:flex-col sm:text-center lg:flex-row lg:text-left items-center gap-3">
      <div className="relative w-fit">
        <img
          className="min-w-[60px] rounded-full"
          src={`/images/${imageUrl}`}
          alt=""
        />
        <div className="absolute -top-1 -right-1 bg-primary text-white w-6 h-6 text-center content-center border-2 border-white text-standard rounded-full">
          {num}
        </div>
      </div>
      <p className="">{title}</p>
    </div>
  )
}
