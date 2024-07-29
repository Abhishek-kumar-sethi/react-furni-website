import Homecontent5card from './home-content5-card'
import './home.css'
import post1 from '../image/post-1.jpg'
import post2 from '../image/post-2.jpg'
import post3 from '../image/post-3.jpg'
import sofa from '../image/sofa.png'
export default function Homecontent5(){
    return(
        <div className="home-content5">
            <div className='home-content5-content'>
            <div className='home-content5-content-head'>
                <h1>Recent Blog</h1>
                <a href="#">View all post</a>
            </div>
            <div style={{display:"flex"}}>
                <Homecontent5card
                    img={post1}
                    name={"First Time Home Owner ideas"}
                    para={"Kristin Waston"}
                    date={"Dec 19,2021"}
                />
                <Homecontent5card
                    img={post2}
                    name={"How To Keep Your Furniture Clean"}
                    para={"Robert Fox"}
                    date={"Dec 15,2021"}
                />
                <Homecontent5card
                    img={post3}
                    name={"Small Space Furniture Apartment Ideas"}
                    para={"Kristin Waston"}
                    date={"Dec 12,2021"}
                />
            </div>
            <img src={sofa} alt="" className='sofa-img'/>
            </div>  
        </div>
    )
}