import css from "./page.module.css"
import Image from "next/image"
import Search from "../images/search-interface-symbol.png"
import Heart from "../images/heart.png"
import Cart from "../images/cart.png"
import User from "../images/user.png"


export default function Header(){
    return(
        <div className={css.header}>
            <h1 className={css.name}>cyber</h1>

        <div className={css.search}>
            {/* <input type="text" placeholder="Search"/>
            <button type="submit" className={css.search}></button> */}

            <Image src={Search} alt="image"/>
            <input type="text"  placeholder="Search"/>
        </div>

            <ul className={css.page}>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Blog</li>
            </ul>
            
            <div className={css.images}>
            <Image src={Heart} alt="Image"/>
            <Image src={Cart} alt="Image"/>
            <Image src={User} alt="Image"/>

            </div>
        </div>
    )
            
}