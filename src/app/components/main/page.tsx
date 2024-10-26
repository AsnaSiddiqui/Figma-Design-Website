import Image from "next/image"
import css from "./page.module.css"
import IphoneImage from "../images/Iphone Image.png"
import PlayStation from "../images/PlayStation.png"
import Headphone from "../images/headphone.png"
import Image36 from "../images/image 36.png"
import MacBookPro from "../images/MacBook Pro 14.png"
import Lessthan from "../images/lessthan.png"
import Greaterthan from "../images/greaterthan.png"
import Phone from "../images/phone.png"
import Smartwatch from "../images/smartwatch.png"
import Camera from "../images/camera.png"
import Earphones from "../images/earphones.png"
import Monitor from "../images/monitor.png"
import Joystick from "../images/joystick.png"
import Iphone14pro from "../images/Iphone14pro.png"
import Camera2 from "../images/camera2.png"
import Watch from "../images/watch.png"
import Headphone2 from "../images/headphone2.png"
import Simplewatch from "../images/simplewatch.png"
import Flipmobile from "../images/flipmobile.png"
import Airbuds from "../images/airbuds.png"
import Tablet from "../images/tablet.png"
import Watchpods from "../images/watchpods.png"
import Tablets from "../images/tablets.png"
import Zflip from "../images/zflip.png"
import Macbook1 from "../images/Macbook1.png"
import Iphonegold from "../images/Iphonegold.png"
import Iphonewhite from "../images/Iphonewhite.png"





export default function Home() {
        return (
         <div>
        <div className={css.section1}>
          <div className={css.leftside}>
          <h3>Pro.Beyond.</h3>
          <h1>IPhone 14 <span>Pro</span></h1>
          <p>Created to change everything for the better. For everyone</p>
          <button>Shop now</button>
          </div>
          <div className={css.rightside}>
          <Image src={IphoneImage} alt="image"/>
          </div>
        </div>

        <div className={css.section2}>
          <div className={css.leftside1}>
            <div className={css.box1}>

              <Image src={PlayStation} alt="image"/>

              <div className="para">         
             <h2>Playstation 5</h2>
              <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>
            <div className={css.box2}>
            <Image src={Headphone} alt="image"/>

            <div className={css.para2}>
            <h2>Apple <br />AirPods <br /> <span>Max</span></h2>
            <p>Computational audio. Listen, it's powerful</p>
            </div>
              
              <div className={css.box2_1}>
              <Image src={Image36} alt="image"/>

              <div className={css.para2_1}>
              <h2>Apple <br />Vision <span>Pro</span></h2>
              <p>An immersive way to experience entertainment</p>
              </div>
              </div>
            </div>

              </div>
              <div className={css.rightside2}>
              <div className={css.box3}>

              <div className={css.para3}>
              <h2>Macbook<br/><span>Air</span></h2>
              <p>The new 15inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
               <button>Shop now</button>
              </div>
              <Image src={MacBookPro} alt="image"/>

            </div>
          </div>
         
        </div>



          <div className={css.section3}>
            <div className={css.category}>
  
                <h3>Browse By Category</h3>

        <div>
            <Image src={Lessthan} alt="image"/>
            <Image src={Greaterthan} alt="image"/>
            
            </div>

            </div>

          <div className={css.miniblog}>

            <div className={css.card}>
              <div className={css.image}>
                <Image src={Phone} alt="image"/>
              </div>
              <h5>Phones</h5>
            </div>
         

            <div className={css.card}>
              <div className={css.image}>
                <Image src={Smartwatch} alt="image"/>
              </div>
              <h5>Smart Watches</h5>
            </div>


            <div className={css.card}>
              <div className={css.image}>
                <Image src={Camera} alt="image"/>
              </div>
              <h5>Cameras</h5>
            </div>



            <div className={css.card}>
              <div className={css.image}>
                <Image src={Earphones} alt="image"/>
              </div>
              <h5>Headphones</h5>
            </div>


            <div className={css.card}>
              <div className={css.image}>
                <Image src={Monitor} alt="image"/>
              </div>
              <h5>Computers</h5>
            </div>


            <div className={css.card}>
              <div className={css.image}>
                <Image src={Joystick} alt="image"/>
              </div>
              <h5>Gaming</h5>
            </div>
          </div>


          </div>



          <div className={css.section4}>

          <div className={css.upside}>
            <h4>New Arrival</h4>
            <h4>Bestseller</h4>
            <h4>Featured Products</h4>
          </div>

          <div className={css.downside}>
            <div className={css.row1}>
              <div className={css.card2}>
                <div className={css.image2}>
                <Image src={Iphone14pro} alt="product"/>
                </div>
                <h5>Apple iPhone 14 Pro Max 128GB Deep Purple</h5>
                <h6>&#36;900</h6>
                <button>Buy Now</button>
              </div>

              <div className={css.card2}>
                <div className={css.image2}>
                <Image src={Camera2} alt="product"/>
                </div>
                <h5>Blackmagic Pocket Cinema Camera 6k</h5>
                <h6>&#36;2535</h6>
                <button>Buy Now</button>
              </div>

              <div className={css.card2}>
                <div className={css.image2}>
                <Image src={Watch} alt="product"/>
                </div>
                <h5>Apple Watch Series 9 GPS 41mm Starlight Aluminium</h5>
                <h6>&#36;399</h6>
                <button>Buy Now</button>
              </div>

              <div className={css.card2}>
                <div className={css.image2}>
                <Image src={Headphone2} alt="product"/>
                </div>
                <h5>AirPods Max Silver Starlight Aluminium</h5>
                <h6>&#36;549</h6>
                <button>Buy Now</button>
              </div>
            </div>

            </div>



              <div className={css.downside2}>
            <div className={css.row2}>

            <div className={css.card3}>
                <div className={css.image3}>
                <Image src={Simplewatch} alt="product"/>
                </div>
                <h5>Samsung Galaxy Watch6 Classic 47mm Black</h5>
                <h6>&#36;369</h6>
                <button>Buy Now</button>
              </div>


              <div className={css.card3}>
                <div className={css.image3}>
                <Image src={Flipmobile} alt="product"/>
                </div>
                <h5>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h5>
                <h6>&#36;1799</h6>
                <button>Buy Now</button>
              </div>


              <div className={css.card3}>
                <div className={css.image3}>
                <Image src={Airbuds} alt="product"/>
                </div>
                <h5>Galaxy Air Buds FE Graphite</h5>
                <h6>&#36;99.99</h6>
                <button>Buy Now</button>
              </div>


              <div className={css.card3}>
                <div className={css.image3}>
                <Image src={Tablet} alt="product"/>
                </div>
                <h5>Apple iPad 9 10.2' 64GB Wi-Fi Silver (MK2L3) 2021</h5>
                <h6>&#36;398</h6>
                <button>Buy Now</button>
              </div>


            </div>
          
            </div>

          </div>

          <div className={css.section5}>
            <div className={css.cards}>           
          <div className={css.cards4}>
            <div className={css.image4}>
              <Image src={Watchpods} alt="products"/>
            </div>
            <h3>Popular Products</h3>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
          </div>

          <div className={css.cards4_1}>
            <div className={css.image4_1}>
              <Image src={Tablets} alt="products"/>
            </div>
           
          <h3>Ipad Pro</h3>
          <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button>Shop Now</button>

          </div>

          <div className={css.cards4_2}>
            <div className={css.image4_2}>
              <Image src={Zflip} alt="products"/>
            </div>
            <h3>Samsung Galaxy </h3>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>

        </div>

        <div className={css.cards4_3}>
            <div className={css.image4_3}>
              <Image src={Macbook1} alt="products"/>
            </div>
           <h3>Macbook Pro</h3>
           <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
           <button>Shop Now</button>
          </div>
        </div>

        </div>

          <div className={css.section6}>
            <div className={css.discount}>
              <h4>Discounts up to -50% </h4>
            </div>


          <div className={css.cardss}>
          <div className={css.card5}>
            <div className={css.image5}>
            <Image src={Iphonegold} alt="product"/>
            </div>
            <h5>Apple iPhone 14 Pro 512GB Gold (MQ233)</h5>
              <h6>&#36;1437</h6>
              <button>Buy Now</button>
          </div>


          <div className={css.card5}>
            <div className={css.image5}>
            <Image src={Headphone2} alt="product"/>
            </div>
            <h5>AirPods Max Silver Starlight Aluminium </h5>
              <h6>&#36;549</h6>
              <button>Buy Now</button>
          </div>


          <div className={css.card5}>
            <div className={css.image5}>
            <Image src={Watch} alt="product"/>
            </div>
            <h5>Apple Watch Series 9 GPS 41mm Starlight Aluminium </h5>
              <h6>&#36;399</h6>
              <button>Buy Now</button>
          </div>

          <div className={css.card5}>
            <div className={css.image5}>
            <Image src={Iphonewhite} alt="product"/>
            </div>
            <h5>Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h5>
              <h6>&#36;1499</h6>
              <button>Buy Now</button>
          </div>
          </div>
          </div>


          <div className={css.section7}>
          <h2>Big Summer <span>Sale</span></h2>
          <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <button>Shop Now</button>
          </div>


        </div>
        )
    }