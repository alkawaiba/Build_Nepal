import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import './Product.css'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';
import { useParams } from 'react-router-dom';
const Product = () => {
    const param = useParams();
    console.log(param)
    const [data, setData] = useState({});



    useEffect(() => {
        const getProduct = async() => {
            const response = await axios.get(`http://127.0.0.1:8000/services/service-detail/${param.id}`)
            console.log(response.data)
            setData(response.data)
        }

        getProduct()
    },[])

    const dispatch = useDispatch();
    let quantity = 1;
    const addToCart = (item) => {
      console.log(item)
      dispatch(
        addProduct({ ...item, quantity})
      );
    }
  return (
    <div className = "productWrapper">
        <div className="productImgContainer">
            <img src={data?.smart_image} alt="" className = "productImg" />
        </div>
        <div className="infoContainer">
            <h1 className="productTitle">{data?.name}</h1>
            <p className="productDesc">{data?.description}</p>
            <p className="productPrice">Advance Payment : Rs.{data?.price}</p>
                
            <button className="bttn" onClick = {() =>addToCart(data)}>Add To Cart</button>
          
        </div>

    </div>
  )
}

export default Product