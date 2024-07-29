import Homeright from "../home-page/home-right"
import Homeleft from "../home-page/home-left"
import Homecontent5card from "../home-page/home-content5-card"
import './blog.css'
import Blogcard from "./blog-page-card"
import Homecontent4 from "../home-page/home-content4"
import Homeemail from "../home-page/home-email"
import Homecontentfooter from "../home-page/home-content-footer"
import Homefooter from "../home-page/home-footer"
import sofa from '../image/sofa.png'
export default function Blogpage(){
    return(
        <div>
            <div className="home">
                <Homeright pageheading={"Blog"}/>
                <Homeleft/>
            </div>
            <div className="blog-card">
                <Blogcard/>
            </div>
            <Homecontent4/>
            <div style={{display:"flex",paddingLeft:"40px"}}>
                <Homeemail/>
                <img src={sofa} alt="" className='blog-sofa'/>
            </div>
            <Homecontentfooter/>
            <Homefooter/>
        </div>
    )
}