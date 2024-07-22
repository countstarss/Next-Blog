import Hero from "@/components/HomePage/Hero"
import FeaturedPosts from "@/components/HomePage/FeaturedPosts"

const DUMMY_POSTS = [
  {
    title:"Getting Started with NextJS",
    image:'getting-started-nextjs.png',
    excerpt:'text text text text text',
    date:'2024-07-22',
    slug:'getting-started-with-nextjs'
  },
  {
    title:"Getting Started with NextJS 2",
    image:'getting-started-nextjs.png',
    excerpt:'text text text text text',
    date:'2024-07-22',
    slug:'getting-started-with-nextjs2'
  },
  {
    title:"Getting Started with NextJS 3",
    image:'getting-started-nextjs.png',
    excerpt:'text text text text text',
    date:'2024-07-22',
    slug:'getting-started-with-nextjs3'
  },
  {
    title:"Getting Started with NextJS 4",
    image:'getting-started-nextjs.png',
    excerpt:'text text text text text',
    date:'2024-07-22',
    slug:'getting-started-with-nextjs4'
  },
  
]

function HomePaeg() {

  return <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
  </>
}

export default HomePaeg
