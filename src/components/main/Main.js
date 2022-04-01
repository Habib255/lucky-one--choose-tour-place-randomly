import React, { useEffect, useState } from 'react';
import Places from '../places/Places'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Main = () => {
    const [places, setPlaces] = useState([])
    const [cart, setCart] = useState([])
    const [randomPlace, setRandomPlace] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))

    }, [])
    const handleAddToCart = (place) => {
        const newCart = [...cart, place]
        setCart(newCart)
    }
    const resetBtn = () => {

        setCart([])
        setRandomPlace([])
    }
    const randomBtn = () => {
        const randomPlace = cart[Math.floor(Math.random() * cart.length)]

        setRandomPlace(randomPlace)


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
                    <h2>Selected place</h2>
                    <div>
                        {cart.map(area =>
                            <div className='added-details' key={area.id}>

                                <img src={area.img} alt="" />

                                <p>{area.name}</p>
                                <button className='delete-btn'><p><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p></button>
                            </div>
                        )}

                    </div>
                    <h4>chosen place</h4>
                    <div className='added-details' key={randomPlace.id}>


                        <img src={randomPlace.img} alt="" />

                        <p>{randomPlace.name}</p>

                    </div>
                    <button onClick={randomBtn} className='first-choose'>choose 1 randomly</button>
                    <button onClick={resetBtn} className='reset'>reset item </button>

                </div>
            </div>
        </div>
    );
};

export default Main;