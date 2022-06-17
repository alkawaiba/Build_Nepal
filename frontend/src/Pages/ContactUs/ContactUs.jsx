import React, {useState} from 'react'
import './ContactUs.css'
import axios from 'axios'
const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [subject, setSubject] = useState("")
  const [showMessage, setShowMessage] = useState("")

  const handleSend = async(e) => {
    e.preventDefault();

    const response = await axios.post('http://127.0.0.1:8000/contact/submit-contact-form/',{
      email : email,
      description : description,
      subject : subject,
      address : address


    })
    console.log(response.data)
    if(response.status === 200){

      setShowMessage("Your query has been send to the admin! You will be informed soon")

      setEmail("")
      setName("")
      setSubject("")
      setDescription("")
      setAddress("")

    }
    
  }
  return (
      <div className="contactWrapper">
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+977 98********</div>
          
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">buildnepal0@gmail.com</div>
         
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        
      <form action="#">
        <div class="input-box">
          <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        </div>
        <div class="input-box">
          <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
        </div>
        <div class="input-box">
          <input value = {subject} onChange= {(e) => setSubject(e.target.value)} type="text" placeholder="Enter Subject" />
        </div>
        <div class="input-box message-box">
          <textarea value = {description}  onChange = {(e) => setDescription(e.target.value)} name="" id="" cols="30" rows="10" placeholder = "Write message..." />
       </div>
        
        <div class="input-box">
          <input value = {address} onChange = {(e) => setAddress(e.target.value)} type="text" placeholder="Enter your address" />
        </div>
        <div class="button">
          <input onClick = {handleSend} type="button" value="Send Now" />
        </div>
        {
          showMessage && <p style = {{marginTop : "10px"}}>{showMessage}</p>
        }
      </form>
    </div>
    </div>
  </div>
  </div>

  )
}

export default ContactUs

