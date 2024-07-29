import Homeright from "../home-page/home-right"
import Homeleft from "../home-page/home-left"
import './cart.css'
import Cartcontent1 from "./cart-content"
import Homeemail from "../home-page/home-email"
import Homecontentfooter from "../home-page/home-content-footer"
import Homefooter from "../home-page/home-footer"
import CartTable from "./cart-table"
import sofa from '../image/sofa.png'
export default function Cartpage(){
    return(
        <div>
            <div className="home">
                <Homeright pageheading={"Cart"}/>
                <Homeleft/>
            </div>
            <div className="cart-page">
                <CartTable/>
                <Cartcontent1/>
            </div>  
            <div style={{display:"flex",paddingLeft:"40px"}}>
            <Homeemail/>
            <img src={sofa} alt="" className='contact-sofa'/>
            </div>
            <Homecontentfooter/>
            <Homefooter/>
        </div>
    )
}