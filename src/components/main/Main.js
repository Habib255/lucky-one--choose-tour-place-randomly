import React, { useEffect, useState } from 'react';
import Places from '../places/Places'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Main = () => {
    const [places, setPlaces] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))

    }, [])
    const handleAddToCart = (place) => {
        const newCart = [...cart, place]
        setCart(newCart)
    }
    return (
        <div className='fullpart'>
            <div className='components'>
                {

                    places.map(place => <Places key={place.id}
                        place={place}
                        handleAddToCart={handleAddToCart}></Places>)
                }
            </div>
            <div className="aside-part">
                <div className='cart-area'>
                    <h2>selected item: {cart.length}</h2>
                    <div>
                        {cart.map(area =>
                            <div className='added-details' key={area.id}>

                                <img src={area.img} alt="" />

                                <p>{area.name}</p>
                                <button className='delete-btn'><p><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p></button>
                            </div>
                        )}

                    </div>
                    <button className='first-choose'>choose randomly</button>
                    <button className='choose-again'>choose again</button>

                </div>
            </div>
        </div>
    );
};

export default Main;