import Homecontent2 from "../home-page/home-content2";
import Homeright from "../home-page/home-right";
import Homeleft from "../home-page/home-left";
import Homecontent4 from "../home-page/home-content4";
import Homeemail from "../home-page/home-email";
import Homefooter from "../home-page/home-footer";
import './shop.css'
import './about.css'
import Homecontentfooter from "../home-page/home-content-footer";
import Aboutcontentcard from "./about-team-content";
import sofa from '../image/sofa.png'
export default function Aboutpage(){
    return(
        <div>
            <div className="home">
            <Homeright pageheading={"About"}/>
            <Homeleft/>
        </div>
            <Homecontent2/>
            <Aboutcontentcard/>
            <Homecontent4/>
            <div className="about-email">
            <Homeemail/>
                <img src={sofa} alt="" className='about-sofa'/>
            </div>
            <Homecontentfooter/>
            <Homefooter/>
        </div>
    )
}