import classes from './MainNavigation.module.css'
import Link from "next/link";
import Logo from './Logo'

function MainNavigation() {
    return <header className={ classes.header }>
        <Link href='/'>
            <Logo />
        </Link>
        <nav>
            <ul>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/contect">Contect</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;
