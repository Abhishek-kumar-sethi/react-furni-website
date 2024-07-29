import './home.css'
export default function Homecontent5card({name,para,img,date}){
    return(
        <div className="home-content5-card">
            <div className="home-content5-card-head">
                <img src={img} alt="" />
            </div>
            <div className="home-content5-card-footer">
                <h4>{name}</h4>
                <h6><span>By</span>  {para} <span>on</span>  {date}</h6>
            </div>
        </div>
    )
}