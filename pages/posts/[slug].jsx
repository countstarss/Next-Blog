// 使用slug，可读性更高
import PostContent from "@/components/posts/PostDetail/PostContent";
import { getPostData,getPostsFile } from "@/helper/posts-util";

function PostDetailPage(props) {
    return <PostContent post={props.post}/>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props:{
            post: postData
        },
        revalidate: 600
    };
}

export function getStaticPaths() {
    // 得到的是所有的文件名
    const postFilenames = getPostsFile();

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/,''))

    return {
        // 预生成所有的路径
        paths:slugs.map((slug) => ({ params:{ slug:slug } })),
        fallback: false
    }
}

export default PostDetailPage;
