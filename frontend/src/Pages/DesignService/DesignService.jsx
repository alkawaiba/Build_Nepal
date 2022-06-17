// import DesignServiceData from "../../data/DesignServiceData";
import './DesignService.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
import Khalti from '../../components/Payment/Khalti/Khalti'
import Esewa from "../../components/Payment/Esewa/Esewa";
import { addProduct } from "../../redux/cartRedux";
import { useState, useEffect } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const DesignService = ({signedIn}) => {
  

  const navigate = useNavigate();
  useEffect(() => {
      if(!signedIn){
        navigate('/login')
      }
    },[signedIn])

  
    const [designData, setDesignData] = useState({});
    useEffect(() => {
        const getPosts = async () => {
          const response = await axios.get('http://127.0.0.1:8000/services/services-by-category/Design Services')
          console.log(response.data)
          setDesignData(response.data)
        }
        getPosts()
         console.log(designData)
        
      }, [])


    const [open, setOpen] = React.useState(false);
    console.log(designData)
    console.log(designData?.services)
    // console.log(designData[services])
 
    const handleLink = (id) => {
      navigate(`/product/${id}`)
    }
    return (
      <div className="designContainer">
         <h3>Design Services</h3>
        <div className="main_content">
           
           {
               designData?.services?.map(item => {
                   return  <div className="card" key={item.id} onClick = {() =>handleLink(item.id)}>
                   <div className="card_img">
                       <img style = {{width : "300px", height : "200px"}} src={item.smart_image} alt = {item.main_image_alt_text} />
                   </div>
                   <div className="card_header">
                       <h2 style = {{fontSize : "25px"}}>{item.name}</h2>
                       <p style = {{fontSize : "18px"}}>{item.description.length > 20 ? item.description.slice(0,80) + '...' : item.description }</p>
                       <p className="price">Rs. {item.price}</p>
                       

                       {/* <Modal
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                       >
                       <Box sx={style}>
                           <h3 style = {{textAlign : "center", marginBottom : "15px" }}>Select Payment Method</h3>
                           <div style = {{display : "flex", alignItems : "center", justifyContent : "space-between"}}>
                           <Khalti price = {parseInt(item.price)}/>
                           <Esewa price = {parseInt(item.price)}/>
                           
                           </div>
                       </Box>
                       </Modal> */}
                   </div>
               </div>
       
               })
           }
            
        </div>
        </div>
    )
}
export default DesignService;