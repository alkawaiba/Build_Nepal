
import { Link } from 'react-router-dom'
import './MainSection.css'

function MainSection({member, setMember}) {
  return (
    <div className='main-container'>
        <video src='videos/video-1.mp4' autoPlay loop muted />
        <h1>Build Nepal</h1>
        <p>Change starts with you</p>
        <div className='main-btns'>
            <Link to ='/postServices'>
            <button className='btnSection btn-post' disabled = {!member}>
                
                Post your Services
                
            </button>
            </Link>
            <button className='btnSection btn-rent'>
            <Link to = '/equipment-rental' style = {{textDecoration : "none"}}>
                Rent Equipments
            </Link>
            </button>
        </div>
        
    </div>
  )
}

export default MainSection