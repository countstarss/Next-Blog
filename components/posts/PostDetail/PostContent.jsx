import PostHeader from './PostHeader';
import classes from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark,dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    /*
    TODO: How to render image in react-markdown
    MARK: - Render image
    */
    const customComponents = {
        // rendering Image
        // img({ src, alt }) {
        //     return (
        //         <Image 
        //             src={`/images/posts/${post.slug}/${src}`} 
        //             alt={alt} 
        //             width={300} 
        //             height={200}
        //             className='next-image'
        //         />
        //     );
        // }

        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },

    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customComponents}>
            {/* <ReactMarkdown> */}
                {post.content}
                
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;
