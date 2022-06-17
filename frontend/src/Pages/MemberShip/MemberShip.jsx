import React, { useEffect } from 'react'
import './MemberShip.css'
import checkCircle from './check-circle.svg'
import xSquare from './x-square.svg'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
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
const stripe_key = "pk_test_51KU68wLRge6iNIRmPd85Zoi2slvHCf1tyXo21D3lq9ndIDrMODXfnUeoZPB47nfa8y8LVdQXFBhW69XUrkUftByy00FH3tv7Cy"
const MemberShip = ({signedIn, member, setMember}) => {
  
  const [memberShip, setMemberShip] = useState(false);
 
  const navigate = useNavigate();

  useEffect(() => {
    if(!signedIn){
      navigate('/login')
    }
  },[signedIn])
  const [stripeToken, setStripeToken] = useState("")
  useEffect(() => {
    const getMemberShip = async() => {
      const response = await axios.get('http://127.0.0.1:8000/membership/get-membership-details')
    
      setMemberShip(response.data)
    }
    getMemberShip()
  },[])

  const onToken = (token) => {
    setStripeToken(token);
    navigate('/')
    setMember(true)
    
  };


  return (
      <div className="priceComparisionWrapper">
    <section class="price-comparison">
    
      {
        memberShip?.memberships?.map(item => {
          return <div class="price-column"> 
          
          <div class="price-header">
        <div class="price">
          <div class="dollar-sign">Rs</div>
          {item.price}
          <div class="per-month">/{item.membership_validity_in_months} month</div>
        </div>
        <div class="plan-name">{item.membership_tier}</div>
      </div>
      <div class="divider"></div>

      {item?.features?.map(feature => {
        return feature.is_included ?  <div class="feature">
         <img src={checkCircle} alt = "" />
       {feature.feature_name}
      </div> : 

      <div class="feature">
      <img src={xSquare} alt = "" />
      {feature.feature_name}
      </div> 


      })}
      {/* <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature A
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature B
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature C
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature D
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature E
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature F
      </div> */}
      <h3 className = 'membershipH3'>Duration : {item.membership_validity_in_months} Months</h3>
      <StripeCheckout
              name="Build Nepal "
              image="https://ml8mzf2qdhvl.i.optimole.com/QtrEnA8-7AY3OSJ1/w:474/h:355/q:mauto/rt:fill/g:sm/https://www.buildupnepal.com/wp-content/uploads/2020/06/cseb-machine.jpg"
              billingAddress
              shippingAddress
              description={`Your total is Rs${item?.price}`}
              amount={item?.price * 100}
              stripeKey={stripe_key}
              token = {onToken}
            >
              <button className = "cartSummaryButton">START TODAY</button>
            </StripeCheckout>
          </div>
        })
      }
      
    
   
  </section>
  </div>
  )
}

export default MemberShip