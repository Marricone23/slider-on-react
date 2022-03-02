import React from 'react';

import mountin from '../slider/mountin.jpg' ;
import lion from '../slider/lion.jpg';
import ozero from '../slider/ozero-les.jpg';
import watersky from '../slider/water-sky.jpg';
import Slider from '../slider';
import App from '../app/app';

import './dots.css';

const Dots = ({slides, onDots, slideIndex,current,opacity}) => {
    const slideElements = [ 
        {id:1,src: mountin} , 
        {id:2,src:lion}, 
        {id:3,src:ozero}, 
        {id:4,src:watersky}
    ]; 
     
      const dots = slideElements.map((slide, id) => {   
        return (
       <li className= "dot"
                    key={id}
                    index={id}
                    slideIndex={slideIndex}
                    currentNumber={slideIndex} 
                    style={{
                    opacity: `${id === slideIndex ? 1 : 0.5}`}}               
                    onClick={(e) =>onDots(id)}
                    >                    
       </li>
        )
    });

    return (
         <ul className="dots-wrapper">
        {dots}          
        </ul>
    )    
}

export default Dots;
