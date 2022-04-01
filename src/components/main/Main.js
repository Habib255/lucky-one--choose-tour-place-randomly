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
                <div className='question-answer'>
                    <p><strong>Question: </strong> How does react work</p>
                    <p><strong>Answer: </strong> React is a javascript library.it works dividing it's
                        Ui into multiple components which can be coded easily , can
                        debug easily
                        and where each components has its own property and function. </p>
                    <p><strong>Question: </strong> Difference between props and state
                    </p>
                    <p><strong>Answer:
                    </strong> Here are some difference between props and state- <br />
                        <strong>props:</strong>
                        <li>props are used to pass data and even handlers to its children.</li>
                        <li>props are immuatable, its cann't be changed.</li>
                        <li>props can be used in both functional and class components</li>
                        <li>props are set by the parents components for the children components</li>
                        <strong>state:</strong>
                        <li> state are used to store data of the components that has to be rendered to the view.</li>
                        <li>state holds data and it changable.</li>
                        <li>state can be used only in class components</li>
                        <li>state is genereally updated by evenhandler</li>




                    </p>
                </div>
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
                    <h3>Chosen place </h3>
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