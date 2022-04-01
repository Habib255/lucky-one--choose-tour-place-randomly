import React from 'react';
import './Places.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Places = (props) => {
    const { handleAddToCart, place } = props
    const { name, costToVisit, location, img, ratings } = place


    return (
        <div className='place'>
            <div className='img'>
                <img src={img} alt="" />
            </div>

            <div className='details'>
                <h3>Place Name: {name} </h3>
                <h5>Location: {location}</h5>
                <p>Cost: {costToVisit}</p>
                <p>Ratings: {ratings}</p>
                <button className='button' onClick={() => handleAddToCart(place)}><p className='btn-text'>add to cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>

        </div>
    );
};

export default Places;