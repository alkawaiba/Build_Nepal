import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = (props) => {
  return (
    <>
        <li className='menu_items'>
            <Link className='menu__items__link' to={props.path}>
                <figure className='menu__items__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Build Nepal' className='menu__items__img' />
                </figure>
                <div className='menu__items__info'>
                    <h5 className='menu__items__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default MenuItems