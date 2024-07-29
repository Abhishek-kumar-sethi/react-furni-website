import './home.css'
import imggrid1 from '../image/img-grid-1.jpg'
import imggrid2 from '../image/img-grid-2.jpg'
import imggrid3 from '../image/img-grid-3.jpg'
export default function Homecontent3left(){
    return(
        <div className="home-content3-left">
            <div style={{display:"flex",justifyContent:"start",alignItems:"start"}}>
            <img src={imggrid1} alt="" />
            <img src={imggrid2} alt="" />
            </div>
            <img src={imggrid3} alt="" />
        </div>
    )
}