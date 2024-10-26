import css from "./page.module.css"
import Image from "next/image"
import Twitter from "../images/twitter.png"
import  Facebook  from "../images/facebook.png"
import Tiktok from "../images/tiktok.png"
import Instagram from "../images/instagram.png"

export default function Footer(){
    return(
        <div className={css.footer}>
            <div className={css.section1}>
                <div className={css.side1}>
                <h2>cyber</h2>
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>

                <div className={css.side2}>
                <ul>services</ul>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
                </div>

                <div className={css.side3}>
                    <ul>Assistance to the buyer</ul>
                    <li>Find an order</li>
                    <li>Terms of delivery</li>
                    <li>Exchange & return of goods</li>
                    <li>Guarantee</li>
                    <li>Frequently asked question</li>
                    <li>Terms of use of the side</li>
                </div>
            </div>

            <div className={css.section2}>

            
                <Image src={Twitter} alt="icon" />
                <Image src={Facebook} alt="icon" />
                <Image src={Instagram} alt="icon" />
                <Image src={Tiktok} alt="icon" />
            </div>
            
        </div>
    )
}