import Image from "next/image";
import classes from './Hero.module.css'


function Hero() {
    return (
        <section className={ classes.hero }>
            <div className={ classes.image }>
                <Image src='/images/site/Hero.png' alt="hero" width={400} height={400}/>
            </div>
            <h1>Hi,I'm Luke</h1>
            <p>Web & iOS developer , React , Swift & SwiftUI</p>
        </section>
    )
}

export default Hero;
