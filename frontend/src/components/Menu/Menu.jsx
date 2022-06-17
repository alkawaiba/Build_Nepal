
import MenuItems from './MenuItems'
import './Menu.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
function Menu() {

    const [designMenu, setDesignMenu] = useState({});
    useEffect(() => {
        const getPosts = async () => {
          const response = await axios.get('http://127.0.0.1:8000/services/services-by-category/Design Services')
          setDesignMenu(response.data)
        }
        getPosts()
        
      }, [])


    const [equipment, setEquipment] = useState({});
    useEffect(() => {
        const getPosts = async () => {
          const response = await axios.get('http://127.0.0.1:8000/services/services-by-category/Equipment Rental')
          setEquipment(response.data)
        }
        getPosts()
        
      }, [])
  return (
    <div className='menu'>
        <h1>Look up for these equipments!!</h1>
        <div className='menu__container'>
            <div className='menu__wrapper'>
                <ul className='menu__items'>
                    {equipment?.services?.map(item => {
                         return <MenuItems src={item.smart_image} text = {item.name} id = {item.id} label = 'Available' path = '/equipment-rental' />
                    })}
                   
                </ul>
        <h1>Look up for these available services!!</h1>
        <br></br>
                <ul className='menu__items'>
                    {
                        designMenu?.services?.map((item) => {
                            return <MenuItems src={item.smart_image} text = {item.name} id = {item.id} label = 'Available' path = '/design-services' />
                        })
                    }
                    {/* <MenuItems
                    src='images/img-home.jpg' 
                    text='Bulldozer'
                    label='Available'
                    path='/design-services'
                    />
                    <MenuItems
                    src='images/img-3.jpg' 
                    text='Bulldozer'
                    label='Near you'
                    path='/design-services'
                    /> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu