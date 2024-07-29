import Homecontent3card from './home-content3-card'
import Homecontent3left from './home-content3-left'
import Homecontent3right from './home-content3-right'
import nordicchair from '../image/nordic-chair.png'
import kruzoaerochair from '../image/kruzo-aero-chair.png'
import  ergonomicchair from '../image/ergonomic-chair.png'
import './home.css'
export default function Homecontent3(){
    return(
        
        <div className="home-content3">
            <div style={{display:"flex"}}>
            <Homecontent3left/>
            <Homecontent3right/>
            </div>
            <div className='home-content3-footer' style={{width:"80%"}}>
            <Homecontent3card
                img={nordicchair}
            />
            <Homecontent3card
                img={kruzoaerochair}
            />
            <Homecontent3card
                img={ergonomicchair}
            />
            </div>
        </div>
    )
}