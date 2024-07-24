import PostHeader from './PostHeader';
import classes from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('css',css);
SyntaxHighlighter.registerLanguage('jsx',jsx);
SyntaxHighlighter.registerLanguage('bash',bash);

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
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
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
