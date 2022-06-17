
import KhaltiCheckout from "khalti-checkout-web";
import './Khalti.css'
import {useNavigate} from 'react-router-dom'



const Khalti = ({price}) => {
    const navigate = useNavigate();

    let config = {
        // replace this key with yours
        "publicKey": "test_public_key_c5d30234c2d94beeaa07e6e03eb04dae",
        "productIdentity": "1234567890",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess (payload) {
                // hit merchant api for initiating verfication
                navigate('/success')
                console.log(payload);
            },
            // onError handler is optional
            onError (error) {
                navigate('/failure')
                // handle errors
                console.log(error);
            },
            onClose () {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };
    
    let checkout = new KhaltiCheckout(config);
  return (
    <div>
        <button className = "khaltiButton" onClick = {() => checkout.show({amount: price * 100 })}>Pay With Khalti</button>
    </div>
  )
}

export default Khalti