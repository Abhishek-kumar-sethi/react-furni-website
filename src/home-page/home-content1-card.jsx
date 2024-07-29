import './home.css'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
export default function HomeContentCard({image,name,amount}){
    return(
        <div className="home-content1-card">
            <div className='home-content1-card-header'>
                <img src={image} alt="" />
            </div>
            <footer style={{textAlign:"center"}}>
                <h3>{name}</h3>
                <p>{amount}</p>
                <AddCircleOutlinedIcon className='addicon' fontSize='large'/>
            </footer>
        </div>
    )
}