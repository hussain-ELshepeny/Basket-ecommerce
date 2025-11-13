import RecentPost from "../components/blog-components/RecentPost";
import BlogBox from "../components/blog-components/BlogBox";
import { usePagination } from "../hooks/usePagination";
import PaginationControls from "../components/shared/PaginationControl";
import { useBlog } from "../hooks/useBlog";
import Tags from "../components/blog-components/Tags";
import SocialMedia from "../components/blog-components/SocialMedia";
export default function Blog() {
  const { allBlogs } = useBlog();
  const { data: blogsData, isPending } = allBlogs;
  const blogs = blogsData?.data || []; //question here
  console.log(blogs); //undefined

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
    totalItems: blogs?.length,
    itemsPerPage: 2,
  });

  const currentBlogItems = blogs
    ?.slice(startIndex, endIndex)
    .map((blog, i) => (
      <BlogBox key={i} imageUrl={blog.Image.url} title={blog.title} />
    ));

  return (
    <div className="section-container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="sm:col-span-2">
        {isPending ? (
          <div className="loading-container flex flex-col items-center justify-center h-[65vh]">
            <div className="w-12 h-12 border-6 border-t-6 border-gray-300 border-t-primary rounded-full animate-spin mb-3"></div>
            <p className="loading-text text-heading font-bold text-lg">
              fetching data...
            </p>
          </div>
        ) : blogs && blogs.length > 0 ? (
          currentBlogItems
        ) : (
          <div className="text-center h-[50vh] font-bold italic flex items-center justify-center">
            <p className="text-red text-xl">No Data Found 📅</p>
          </div>
        )}

        {
          <PaginationControls
            goToPrev={goToPrev}
            goToNext={goToNext}
            currentPage={currentPage}
            paginationRange={paginationRange}
            goToPage={goToPage}
            totalPages={totalPages}
          />
        }
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

        <h2 className="uppercase mb-4">Social </h2>
        <div className="flex flex-col gap-2">
          <SocialMedia color="3B5998" imgSrc="/images/face.png" alt="facebook">
            Facebook
          </SocialMedia>
          <SocialMedia
            color="CC2366"
            imgSrc="/images/insta.png"
            alt="instagram"
          >
            Instagram
          </SocialMedia>
          <SocialMedia
            color="1DA1F2"
            imgSrc="/images/twitter.png"
            alt="twitter"
          >
            Twitter
          </SocialMedia>
          <SocialMedia color="FF4500" imgSrc="/images/reddit.png" alt="reddit">
            Reddit
          </SocialMedia>
          <SocialMedia color="E60023" imgSrc="/images/pint.png" alt="pinterest">
            Pinterest
          </SocialMedia>
        </div>

        <h2 className="uppercase mt-10 mb-4">Widget Banner</h2>
        <div>
          <img src="/images/offer2.png" alt="" />
        </div>

        <h2 className="uppercase mt-10 mb-4">Tags</h2>
        <div>
          <ul className="flex gap-4 flex-wrap">
            <Tags>ecommerce</Tags>
            <Tags>food</Tags>
            <Tags>grocery</Tags>
            <Tags>organic</Tags>
            <Tags>shop</Tags>
            <Tags>shopify</Tags>
            <Tags>store</Tags>
            <Tags>ecommerce</Tags>
          </ul>
        </div>
      </div>
    </div>
  );
}
