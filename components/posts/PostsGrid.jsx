import PostItem from "./PostItem";
import classes from './PostsGrid.module.css'


function PostsGrid( props ) {

    const { posts } = props;

    return <ul className={ classes.grid }>
        {posts.map((posts) => <PostItem  posts={posts} key={posts.title}/>)}
    </ul>
}

export default PostsGrid;
