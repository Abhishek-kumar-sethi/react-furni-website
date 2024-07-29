import Homecontentfooter from "../home-page/home-content-footer"
import Homeemail from "../home-page/home-email"
import Homefooter from "../home-page/home-footer"
import Shopcard from "./shop-card"
import Homeright from "../home-page/home-right"
import Homeleft from "../home-page/home-left"
import './shop.css'
import sofa from '../image/sofa.png'
export default function Shoppage(){
    return(
        <>
         <div className="home">
            <Homeright pageheading={"Shop"}/>
            <Homeleft/>
        </div>
        <div className="about">
            <Shopcard/>
            <img src={sofa} alt="" className='shop-sofa'/>
        </div>
        <div>
        <Homeemail/>
        <Homecontentfooter/>
        <Homefooter/>
        </div>
        </>
    )
}