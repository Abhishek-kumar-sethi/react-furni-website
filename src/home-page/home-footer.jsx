import './home.css'
export default function Homefooter(){
    return(
        <div className="home-footer">
            <div className="home-footer-content">
                <div>
                    <span>Copyright&copy;2024. All Rights Reserved. — Designed with love by Untree.co</span>
                    <p>Distributed By ThemeWagon</p>
                </div>
                <div style={{display:"flex",gap:"30px",alignItems:"start",justifyContent:"center"}}>
                    <span>Terms & Condition</span>
                    <span>Privacy & Policy</span>
                </div>
            </div>
        </div>
    )
}