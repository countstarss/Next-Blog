// 在这里添加帖子的功能 比如获取所有帖子

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'posts')

export function getPostsFile() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    
    const postSlug = postIdentifier.replace(/\.md$/, ''); //remove file extension
    const filePath = path.join(postsDirectory,`${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');
    // data 和 content 是matter中定义好的
    const { data,content } = matter(fileContent);

    // console.log(`util:16 -> data:`,data);
    // console.log(`util:17 -> content:${content}`);


    const postData = {
        slug:postSlug,
        ...data,
        content
    }
    // console.log(`util:26 -> postData:`,postData);
    return postData;
}

export function getAllPosts() {
    const postsFiles = getPostsFile();

    // console.log(`util:33 -> postsFiles:`,postsFiles);
    
    const allPosts = postsFiles.map((postFile) => {
        return getPostData(postFile)
    });
    
    // console.log(`util:39 -> allPosts:`,allPosts);

    const sortedPosts = allPosts.sort((postA,postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured)

    return featuredPosts;
}

