import RecentPost from "../components/blog-components/RecentPost"
import BlogBox from "../components/blog-components/BlogBox"
import { usePagination } from "../hooks/usePagination"
import PaginationControls from "../components/PaginationControl"

const allBlogPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
]

export default function Blog() {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    paginationRange,
    goToNext,
    goToPrev,
    goToPage,
  } = usePagination({
    totalItems: allBlogPosts.length,
    itemsPerPage: 2,
  })

  const currentBlogItems = allBlogPosts
    .slice(startIndex, endIndex)
    .map((blog) => (
      <BlogBox
        key={blog.id}
        imageUrl={`blog-${blog.id}.png`}
        title={blog.title}
      />
    ))

  return (
    <div className="section-container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="sm:col-span-2">
        {currentBlogItems}
        {PaginationControls(
          goToPrev,
          goToNext,
          currentPage,
          paginationRange,
          goToPage,
          totalPages
        )}
      </div>
      <div className="posts">
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
