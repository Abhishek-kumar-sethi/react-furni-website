import Homeright from "../home-page/home-right"
import Homeleft from "../home-page/home-left"
import Contactform from "./contact-form"
import './contact.css'
import Homeemail from "../home-page/home-email"
import Homefooter from "../home-page/home-footer"
import Homecontentfooter from "../home-page/home-content-footer"
import sofa from '../image/sofa.png'
export default function Contactpage(){
    return(
        <div>
            <div className="home">
                <Homeright pageheading={"Contact"}/>
                <Homeleft/>
            </div>
            <div className="contact-content">
                <Contactform/> 
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
