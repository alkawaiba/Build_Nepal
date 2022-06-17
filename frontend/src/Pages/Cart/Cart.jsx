import React,{useState} from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";

import { resetProduct } from '../../redux/cartRedux';
import {useDispatch} from 'react-redux'
const stripe_key = "pk_test_51KU68wLRge6iNIRmPd85Zoi2slvHCf1tyXo21D3lq9ndIDrMODXfnUeoZPB47nfa8y8LVdQXFBhW69XUrkUftByy00FH3tv7Cy"



const Cart = () => {
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
  
  const dispatch = useDispatch()
    const [stripeToken, setStripeToken] = useState("")
    const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
    const onToken = (token) => {
      setStripeToken(token);
      dispatch(resetProduct())
      navigate('/success')
      
    };
    console.log(cart)

  return (
    <div className = "cartWrapper">
        <h1 className="cartTitle">YOUR WHISHLIST</h1>
        {/* <div className="cartTop">
            <button style = {{border : '1px solid black',color : 'black', backgroundColor : 'transparent'}} className = "topButton">CONTINUE SHOPPING</button>
        
        <div className="cartTopTexts">
            <span className="cartTopText">Your Wishlist</span>
        </div>
        <button className = "topButton" style = {{color : 'white', backgroundColor : 'black'}}>CHECKOUT NOW</button>
        </div> */}
        <div>
          <br></br>
        </div>
        <div className="cartBottom">
            <div className="cartInfo">
                {
                    cart.products.map(c => {
                        return <div className="cartProduct">
                        <div className="cartProductDetail">
                        <img className = "cartProductImg" src={c.smart_image} />
                        
                        <div className="cartDetails">
                            <span className = "cartProductName">  <b style = {{marginRight : "5px"}}>Product:</b>{c.name} </span>
                            <span>
                      <b>ID:</b> {c.id}
                      </span>
                      <div>{c.description.length > 50 ? c.description.slice(0,50) + '...' : c.description}</div>
                      </div>
                        </div>
                        <div className = "cartPriceDetail">
                    <div className = "cartProductAmountContainer">
                      
                      <div className = "cartProductAmount">Amount : 1</div>
                      
                    </div>
                    <div className = "cartProductPrice">Price : Rs. {c.price}</div>
                        </div>
        
                    </div>
        
                    })
                }
              
                

                
                
            </div>
            <div className = "cartSummary">
            <h1 className = "cartSummaryTitle">ORDER SUMMARY</h1>
            <div className = "cartSummaryItem">
              <span className = "cartSummaryText">Subtotal</span>
              <span className = "cartSummaryPrice">Rs {cart?.total}</span>
            </div>
            <div className = "cartSummaryItem">
              <span className = "cartSummaryText">Estimated Shipping</span>
              <span className = "cartSummaryPrice">Rs 5.90</span>
            </div>
            <div className = "cartSummaryItem">
              <span className = "cartSummaryText">Shipping Discount</span>
              <span className = "cartSummaryPrice">Rs -5.90</span>
            </div>
            <div className = "cartSummeryItem" style = {{marginBottom : "10px"}} >
              <span  className = "cartSummaryText" style = {{fontWeight : 500, fontSize : "24px", marginRight : "5px"}}>Total : </span>
              <span className = "cartSummaryPrice" style = {{fontWeight : 500, fontSize : "24px"}}>Rs {cart?.total}</span>
            </div>
        
            <StripeCheckout
              name="Build Nepal "
              image="https://ml8mzf2qdhvl.i.optimole.com/QtrEnA8-7AY3OSJ1/w:474/h:355/q:mauto/rt:fill/g:sm/https://www.buildupnepal.com/wp-content/uploads/2020/06/cseb-machine.jpg"
              billingAddress
              shippingAddress
              description={`Your total is Rs.${cart.total}`}
              amount={cart.total * 100}
              stripeKey={stripe_key}
              token = {onToken}
            >
              <button className = "cartSummaryButton">CHECKOUT NOW</button>
            </StripeCheckout>
       
               
           
          </div>
        </div>
    </div>
  )
}

export default Cart

