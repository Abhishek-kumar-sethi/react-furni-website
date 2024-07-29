import Homecontent5card from "../home-page/home-content5-card";
import post1 from '../image/post-1.jpg'
import post2 from '../image/post-2.jpg'
import post3 from '../image/post-3.jpg'
export default function Blogcard(){
    return(
        <div className="blog-content">
           <div>
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
           <div>
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
           <div>
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
        </div>      
    )
}