import React,{Component} from 'react';
import './slider.css';
import mountin from '../slider/mountin.jpg' ;
import lion from './lion.jpg';
import ozero from './ozero-les.jpg';
import watersky from './water-sky.jpg';
import leftarrow from './leftarrow.png';
import rightarrow from './rightarrow.png';

export default class Slider extends Component {

render () {
     
     const {slideIndex,onLeftarrow,onRightarrow,onTouchStart, onTouchEnd,onTouchMove} = this.props;
       return (
            
        <div  className= "slide-wrapper">
            <div className = "slide-wrapper-inner" 
            onTouchStart={(e) => onTouchStart(e)} 
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={(e) => onTouchEnd(e)}
          style={{
          transition: 'transform ease-out 450ms', 
          transform: `translateX(-${slideIndex*100}%)`,
         }}
          >
            <div className ="slide">   
            <img
             className = "item-container-img"
             src= {mountin} width = "450px"
             alt="Mountin" id = "1"
             />
            <h2 className ="item-container-text">Горы</h2>
            </div> 
            <div className="slide">
            <img
             className = "item-container-img"
             src= {lion} width = "450px"
             alt="Lion" id = "2"
             />
            <h2 className="item-container-text">Белый лев</h2>   
            </div>    
            <div className="slide"> 
            <img
             className = "item-container-img"
             src= {ozero} width = "450px"
             alt="Ozero" id = "3"
            />
            <h2 className="item-container-text">Озеро</h2>
            </div>
            <div className="slide">
            <img
             className = "item-container-img"
             src= {watersky} width = "450px"
             alt="Watersky" id = "4"
            />
            <h2 className="item-container-text">Будда</h2>
            </div>                                
            </div>
            <div>
            <div>
            <a
            href="#" 
            className = "swipe-control"
            data-slide="prev"><img src={leftarrow} width = "100px" height="50%" alt="Leftarrow" 
            onClick={() => onLeftarrow()}/>
            </a>
            </div>
              <div>
            <a
            href="#" 
            className = "swipe-control"
            data-slide="next"><img src={rightarrow} width = "100px" height="50%" alt="Rightarrow" 
            onClick={() =>onRightarrow()}/>
            </a>
            </div>  
            </div>
            </div>    
      
      
      )
        
     }
  }
  

