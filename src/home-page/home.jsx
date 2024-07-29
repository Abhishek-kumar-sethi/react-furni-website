import Homecontentfooter from './home-content-footer'
import Homecontent1 from './home-content1'
import Homecontent2 from './home-content2'
import Homecontent3 from './home-content3'
import Homecontent4 from './home-content4'
import Homecontent5 from './home-content5'
import Homeemail from './home-email'
import Homeleft from './home-left'
import Homeright from './home-right'    
import './home.css'
import Homefooter from './home-footer.jsx'
export default function Homepage(){
    return(
        <>
        <div className="home">
            <Homeright pageheading={"Modern Interior Design Studio"}/>
            <Homeleft/>
        </div>
        <div>
            <Homecontent1/>
            <Homecontent2/>
            <Homecontent3/>
            <Homecontent4/>
            <Homecontent5/>
            <Homeemail/>
            <Homecontentfooter/>
            <Homefooter/>
        </div>
        </>
    )
}