---
title: 'Getting Stared With NextJS'
date: '2024-07-23'
author: 'Lukeking'
image: 'getting-started-nextjs.png'
excerpt: 'NextJS is a react framewprk for production 2'
isFeatured: true
---

## This is a title

Luke king

``` js
function PostContent(props) {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return <article className={ classes.content }>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown>
            { post.content }
        </ReactMarkdown>
    </article>
}
```


