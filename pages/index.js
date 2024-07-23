import Hero from "@/components/HomePage/Hero"
import FeaturedPosts from "@/components/HomePage/FeaturedPosts"
import { getFeaturedPosts } from "@/helper/posts-util"


function HomePage(props) {

  return <>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
  </>
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props:{
      posts:featuredPosts
    },
    revalidate:30
  }
}

export default HomePage
