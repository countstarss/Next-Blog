---
title: 'Mastering Javascript'
date: '2024-07-23'
author: 'Luke King'
image: 'mastering-js-thumb.png'
excerpt: 'Mastering Javascript is a great choice！'
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