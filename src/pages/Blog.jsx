import { useEffect, useState } from "react"
import BlogBox from "../components/blog-components/BlogBox"
import RecentPost from "../components/blog-components/RecentPost"

export default function Blog() {
  const arr = [1, 2, 3]
  const blogsPerPage = 2
  const totalBlogs = arr.length
  const totalPages = Math.ceil(totalBlogs / blogsPerPage)

  const [currentPage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState((currentPage - 1) * blogsPerPage)
  const [endIndex, setEndIndex] = useState(currentPage * blogsPerPage)

  const [blogEles, setBlogEles] = useState()

  function renderPagesContent() {
    setBlogEles(
      arr
        .slice(startIndex, endIndex)
        .map((blog, i) => (
          <BlogBox
            key={i}
            imageUrl={`blog-${i + 1}.png`}
            title={"But I must explain to you how all this mistaken idea"}
          />
        ))
    )
  }

  useEffect(() => {
    renderPagesContent()
  }, [currentPage])

  function handleBlogPages(type) {
    type === "next" &&
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1
        setStartIndex((newPage - 1) * blogsPerPage)
        setEndIndex(newPage * blogsPerPage)
        return newPage
      })

    type === "prev" &&
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1
        setStartIndex((newPage - 1) * blogsPerPage)
        setEndIndex(newPage * blogsPerPage)
        return newPage
      })
  }

  function handlePagesNumbers(e) {
    const pageNum = Number(e.target.textContent)
    setCurrentPage(() => {
      setStartIndex((pageNum - 1) * blogsPerPage)
      setEndIndex(pageNum * blogsPerPage)
      return pageNum
    })
  }

  let pagNumEles = []
  for (let i = 1; i < totalPages + 1; i++) {
    pagNumEles.push(
      <div
        key={i}
        className="cursor-pointer w-7 h-7 text-center content-center text-white bg-gray-400 hover:bg-primary rounded-full"
        onClick={handlePagesNumbers}
        style={{
          background: `${currentPage === i ? "#35afa0" : ""}`,
        }}
      >
        {i}
      </div>
    )
  }

  return (
    <div className="section-container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="sm:col-span-2">
        {blogEles}
        <div className="flex items-center gap-6 mx-auto w-fit">
          <button
            className="cursor-pointer bg-black/60 text-white p-2 rounded"
            onClick={() => handleBlogPages("prev")}
            disabled={startIndex === 0}
            style={{
              opacity: `${startIndex === 0 ? ".5" : "1"}`,
              cursor: `${startIndex === 0 ? "not-allowed" : "pointer"}`,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-4">{pagNumEles}</div>

          <button
            className="cursor-pointer bg-black/60 text-white p-2 rounded"
            onClick={() => handleBlogPages("next")}
            disabled={endIndex >= arr.length + 1}
            style={{
              opacity: `${endIndex >= arr.length + 1 ? ".5" : "1"}`,
              cursor: `${endIndex >= arr.length + 1 ? "not-allowed" : "pointer"}`,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="uppercase">Recent Posts</h2>
        <div className="flex flex-col gap-5 mt-3 mb-10 p-5 border border-gray-300">
          {[1, 2, 3].map((post, i) => (
            <RecentPost
              key={i}
              imageUrl={`mini-blog-${i + 1}.png`}
              title={"But I must explain to you how all this mistaken idea"}
              num={i + 1}
            />
          ))}
        </div>

        <h2 className="uppercase mb-4">Social Media</h2>
        <div className="flex flex-col gap-2">
          <div className="bg-[#3B5998] text-white flex items-center gap-6 py-2 px-4 rounded-lg">
            <img src="/images/face.png" alt="" />{" "}
            <span className="uppercase">Facebook</span>{" "}
          </div>
          <div className="bg-[#CC2366] text-white flex items-center gap-6 py-2 px-4 rounded-lg">
            <img src="/images/insta.png" alt="" />{" "}
            <span className="uppercase">Instagram</span>{" "}
          </div>
          <div className="bg-[#1DA1F2] text-white flex items-center gap-6 py-2 px-4 rounded-lg">
            <img src="/images/twitter.png" alt="" />{" "}
            <span className="uppercase">Twitter</span>{" "}
          </div>
          <div className="bg-[#FF4500] text-white flex items-center gap-6 py-2 px-4 rounded-lg">
            <img src="/images/reddit.png" alt="" />{" "}
            <span className="uppercase">reddit</span>{" "}
          </div>
          <div className="bg-[#E60023] text-white flex items-center gap-6 py-2 px-4 rounded-lg">
            <img src="/images/pint.png" alt="" />{" "}
            <span className="uppercase">pinterest</span>{" "}
          </div>
        </div>

        <h2 className="uppercase mt-10 mb-4">Widget Banner</h2>
        <div>
          <img src="/images/offer2.png" alt="" />
        </div>

        <h2 className="uppercase mt-10 mb-4">Tags</h2>
        <div>
          <ul className="flex gap-4 flex-wrap">
            <li className="p-2 border border-gray-300">ecommerce</li>
            <li className="p-2 border border-gray-300">food</li>
            <li className="p-2 border border-gray-300">grocery</li>
            <li className="p-2 border border-gray-300">klbtheme</li>
            <li className="p-2 border border-gray-300">organic</li>
            <li className="p-2 border border-gray-300">shop</li>
            <li className="p-2 border border-gray-300">shopify</li>
            <li className="p-2 border border-gray-300">store</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
