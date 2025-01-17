import Link from "next/link";
import Image from "next/image";
import classes from './PostItem.module.css'

function PostItem(props) {

    const { title,date,slug,content,image,excerpt } = props.post;
    // 格式化可读的字符串
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long', // 输出文本而不是数字的月份
        year: 'numeric'
    })

    // const imagePath = `/images/posts/${props.slug}/${props.image}`
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return <li className={classes.post}>
        <Link href={linkPath}>
            <div className={classes.image}>
                <Image 
                    src={imagePath} 
                    alt={title} 
                    width={300} 
                    height={200}
                    ayout='responsive' 
                />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <p>{formattedDate}</p>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}

export default PostItem;