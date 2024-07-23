import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/helper/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
    return <>
        <Head>
            <title>All Posts</title>
        </Head>
        <AllPosts posts={props.posts}/>
    </>
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props:{
            posts:allPosts
        }
    }
}

export default AllPostsPage;
