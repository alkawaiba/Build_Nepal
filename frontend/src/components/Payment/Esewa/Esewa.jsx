import React from 'react'
import './Esewa.css'
import {v4 as uuidv4} from 'uuid'
var path="https://uat.esewa.com.np/epay/main";

const Esewa = ({ price, membership }) => {
  var params = {
    amt: price,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: price,
    pid: uuidv4(),
    scd: "EPAYTEST",
    su: "http://localhost:3000/success",
    // su: "http://merchant.com.np/page/esewa_payment_success",
    // fu: "http://merchant.com.np/page/esewa_payment_failed"
    fu: "http://localhost:3000/failure",
  };

  var params1 = {
    amt: price,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: price,
    pid: uuidv4(),
    scd: "EPAYTEST",
    su: "http://localhost:3000/success-member",
    // su: "http://merchant.com.np/page/esewa_payment_success",
    // fu: "http://merchant.com.np/page/esewa_payment_failed"
    fu: "http://localhost:3000/failure",
  };

  return membership ? (
    <form className="esewaForm" action={path} method="POST">
      {Object.entries(params1).map(([key, value]) => {
        return <input type="hidden" value={value} name={key} />;
      })}
      <button className='snbtn'
        type="submit"
        style={{ cursor: "pointer", border: "none", outline: "none" }}
      >
        START NOW
      </button>
    </form>
  ) : (
    <form className="esewaForm" action={path} method="POST">
      {Object.entries(params).map(([key, value]) => {
        return <input type="hidden" value={value} name={key} />;
      })}
      <button className='cobtn'
        type="submit"
        style={{ cursor: "pointer", border: "none", outline: "none" }}
      >
        CHECK OUT
      </button>
    </form>
  );
};

export default Esewa;




















// const Esewa = ({price,membership,setMember}) => {
 
//   var params= {
//     amt : price,
//     psc: 0,
//     pdc: 0,
//     txAmt: 0,
//     tAmt: price,
//     pid: uuidv4(),
//     scd: "EPAYTEST",
//     su: "http://localhost:3000/success",
//     // fu: "http://merchant.com.np/page/esewa_payment_failed"
//     fu : "http://localhost:3000/failure"
// }

//   // const clickhandler = () => {
//   // setMember(true)
// // }
//   return ( 

//       <form className = "esewaForm" action={path} method = "POST">

//     {  Object.entries(params).map(([key, value]) => {
//         return <input type = "hidden" value = {value} name = {key}/>
//       })} 

//       {membership?<button className = "cartSummaryButton" type="submit" >START NOW</button>:
//       <button className = "cartSummaryButton" type="submit">CHECKOUT NOW</button>}
//       </form>
        

      
//        /* <button type = "submit" style = {{cursor : "pointer", border : "none", outline : "none"}}>
//                         <img style = {{width : "130px", objectFit : "cover", height : "40px"}} src="https://i2.wp.com/insidergeeks.com/wp-content/uploads/2020/09/eSewa-Digital-Wallet-Nepal.jpeg?resize=696%2C464&ssl=1
//                     " alt="" />                    
                        
//                     </button> */


   
//  )
// }

// export default Esewa
