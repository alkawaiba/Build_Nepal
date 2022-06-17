import React, { useEffect } from 'react'
import './PostServices.css'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const PostServices = ({signedIn}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("Design Services")
  const navigate = useNavigate();
  let category = [];
  useEffect(() => {
    if(!signedIn){
        navigate('/login')
    }
  }, [signedIn])

  const submit = async() => {
  

    const response1 = await axios.get('http://127.0.0.1:8000/services/get-all-categories')

    // console.log(response1.data)

    if(type === 'Design Services'){
        category = 1
    }
    else if (type === 'Equipment Rental'){
      category = 3
    }
    else {
      category = 2
    }
    console.log("category is" + category)
    console.log({name : name,
      price : price,
      main_image_link : image,
      categories : [category],
      description : description})
    try{
      
      const response = await axios.post('http://127.0.0.1:8000/services/create-new-service/',{
      name : name,
      price : price,
      main_image_link : image,
      categories : [category],
      description : description
    })
    // console.log(response)
    }
    catch(error){
      console.log(error)
    }
    
    
  }

  return (
    // <div className ="postServicesContainer">
      
    //     <form action="" className = "postServiceForm">
    //     <h1 className = "postServiceHeading">Post Your Service</h1>
    //         <div className = "fields">
    //         <label className = "postServiceLabel" htmlFor="services">Service: </label>
    //         <select className = "fieldsSelect" name="services" id="services">
    //             <option className = "fieldsOption" value="designServices">Design Services</option>
    //             <option  className = "fieldsOption" value="equipmentRental">Equipment Rental</option>
    //             <option  className = "fieldsOption"value="consultancyServices">Consultancy Services</option>
    //         </select>
    //     </div>
    //     <div className="fields">
    //         <label className = "postServiceLabel" htmlFor="">Name of Service: </label>
    //         <input className = "fieldsInput" type="text"  />
    //     </div>
    //     <div className = "fields">
    //         <label htmlFor="Description" className = "postServiceLabel">Description</label>
    //         <textarea className = "fieldsTextArea" name="" id="Description" cols="30" rows="5" />
    //     </div>
        

    //     <div className = "fields">
    //         <label htmlFor="Description" className = "postServiceLabel">Cost:</label>
    //         <input style = {{fontSize : "18px"}}className = "fieldsInput" type="number"  />
    //     </div>
    //     <div style = {{display : "flex", justifyContent : "center"}}>
    //     <button  className = "fieldsButton">Submit</button>
    //     </div>
    //     </form>
    // </div>


<div className="contactWrapper">
    <div class="container">
    <div class="content">
      <div class="right-side">
        <h1>Post Your Service</h1>
      <form action="#">
        <div class="input-box">
          <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" placeholder="Name of Service" />
        </div>
        <div class="input-box">
          <input value = {image} onChange = {(e) => setImage(e.target.value)} type = "text" placeholder="Link for thumbnail(image link)" />
        </div>
        <div class="input-box message-box">
          <textarea value = {description} onChange = {(e) => setDescription(e.target.value)} name="" id="" cols="30" rows="10" placeholder = "Write Description..." />
        </div>
        <div className = "input-box">
            <label htmlFor="services" style = {{marginRight : "10px"}}>Service: </label>
             <select value = {type} onChange = {(e) => setType(e.target.value)} className = "fieldsSelect" name="services" id="services">
                <option className = "fieldsOption" value="Design Services">Design Services</option>
                 <option  className = "fieldsOption" value="Equipment Rental">Consultancy Services</option>
                 <option  className = "fieldsOption"value="Consultancy Services">Equipment Rental</option>
             </select>
        </div>
        <div class="input-box">
          <input value = {price} onChange = {(e) => setPrice(e.target.value)} type="text" placeholder="Price in Rs" />
        </div>
        <div class="button">
          <input onClick = {submit} type="button" value="Post Service" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  )
}

export default PostServices