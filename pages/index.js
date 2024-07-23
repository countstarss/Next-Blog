import Hero from "@/components/HomePage/Hero"
import FeaturedPosts from "@/components/HomePage/FeaturedPosts"
import { getFeaturedPosts } from "@/helper/posts-util"
import Head from "next/head"


function HomePage(props) {

  return <>
      <Head>
        <title>Next Blog</title>
      </Head>
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
