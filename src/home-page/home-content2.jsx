import Homecontent2left from './home-content2-left'
import Homecontent2right from './home-content2-right'
import './home.css'
export default function Homecontent2(){
    return(
        <div className="home-content2">
            <Homecontent2right/>
            <Homecontent2left/>
        </div>
    )
}