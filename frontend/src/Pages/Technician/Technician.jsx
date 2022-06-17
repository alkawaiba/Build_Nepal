import './Technician.css'
import Individual from './Individual/Individual'
const Technician = () => {
  return (
    <div className = "technicianContainer">
      <h1 style = {{fontSize : "30px", marginBottom : "10px"}}>Technicians</h1>
      <div className="technicianWrapper">
        <Individual url = "surveyors" occupation = "Surveyor with Total station" img1Src = "https://5.imimg.com/data5/SELLER/Default/2020/8/AS/BU/JW/55745748/total-station-survey-service-500x500-500x500.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Sunil Kumar" name2 = "Sun Bahadur" name3= "Amar Kumar" name4 = "Prem Thapa" />
        
        <Individual url = "plumbers" occupation = "Plumber" img1Src = "https://assets.procrewschedule.com/spai/q_lossy+ret_img+to_webp/https://www.procrewschedule.com/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1-768x512.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Sasi Kumar" name2 = "John Doe" name3= "James Smith" name4 = "Liz Austin" />

        <Individual url = "electricians" occupation = "Electrician" img1Src = "https://www.forbes.com/advisor/wp-content/uploads/2021/04/featured-image-hire-an-electrician.jpeg.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Rich Shields" name2 = "Winnie	Page" name3= "Ezra	Sparks" name4 = "Elba	Kaufman	" />

        <Individual url = "welders" occupation = "Welder" img1Src = "https://www.liveabout.com/thmb/wg_loGLLgil6Xjgqs9hoyY6Dcag=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-821095740-5ba88c8e46e0fb00256b49a1.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Kurtis Head" name2 = "Ann	Dunlap" name3= "Jaime	Earline" name4 = "Adam	Grant" />

        <Individual url = "painters" occupation = "Painters" img1Src = "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2019/05/Why_Do_Painters_Wear_White.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Cleo	Barnes" name2 = "Nellie	Brady" name3= "Katheryn" name4 = "Michael" />

         <Individual url = "craneoperators" occupation = "Crane Operators" img1Src = "https://www.hseblog.com/wp-content/uploads/2021/12/Training-And-Certification-Requirements-For-Crane-Operators-1024x683.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "Rose" name2 = "Kathie Smith" name3= "Jami Buckley" name4 = "Buckley" />

        </div>
    </div>
  )
}

export default Technician