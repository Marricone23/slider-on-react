import React, {Component} from 'react';

import Counter from '../counter';
import Dots from '../dots';
import Slider from '../slider';

import mountin from '../slider/mountin.jpg' ;
import lion from '../slider/lion.jpg';
import ozero from '../slider/ozero-les.jpg';
import watersky from '../slider/water-sky.jpg';

import './app.css';

export default class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    slideIndex: 0,
    offset: 0,
    x1:0,
    y1:0,
    dots: [{index:0},{index:1},{index:2},{index:3}],
   index: 0,
     opacity: '0.5',
     current: 1,
     currentDot: [  {id:1,current:1},  {id:2,current:2}, {id:3,current:3},{id:4,current:4}],
     slides: [ {id:1,src: mountin} , {id:2, src:lion}, {id:3,src:ozero}, {id:4,src:watersky}] ,
    }; 
this.onLeftarrow = this.onLeftarrow.bind(this);
this.onRightarrow = this.onRightarrow.bind(this);
this.onDots = this.onDots.bind(this);
this.onTouchStart = this.onTouchStart.bind(this);
this.onTouchMove = this.onTouchMove.bind(this);
this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onLeftarrow(){
  const {
    slideIndex,
    slides,
    current,
      } = this.state;
 //this.setState(state => ({opacity: state.opacity-1})   );
 //условие? значение1(true) : значение2(false)
 let total =  slideIndex ? current-1  : slides.length ;
 let prevImgIndex = slideIndex ? slideIndex - 1 : slides.length - 1;
    this.setState ({
    slideIndex: prevImgIndex, 
    current: total,
     });

}

onRightarrow(){   
    const {
      slideIndex,
      slides,
      current,
        } = this.state;
    //this.setState(state => ({current: state.current+1}));
    let total =current < slides.length ? current+1 : 1; 
    let nextSlideIndex =  slideIndex === slides.length - 1 ? 0 : slideIndex + 1 ; 
    this.setState({
    slideIndex:nextSlideIndex,
    current: total,
     });
  
} 
onDots(id){
  const {
    slides,
    opacity,
            } = this.state;
   let total = slides.length ? id +1 : 1;
   let addOpacity = id == opacity ;
   this.setState({    
 slideIndex: id,
 current: total,
 opacity: addOpacity
  });
   
}

onTouchStart(e) {
  this.state.x1 = e.nativeEvent.touches[0].clientX;
  this.state.y1 = e.nativeEvent.touches[0].clientY;
  console.log('onTouchStart', e.nativeEvent);

}
  
 
onTouchMove(e) {
      this.state.x1 = e.nativeEvent.touches[0].clientX;
      let x2 = e.nativeEvent.touches[0].clientX;
      const xDiff = x2 - this.state.x1;
      const absXDiff = Math.abs(xDiff);
      
       if(absXDiff<=5){
         
         this.onRightarrow(x2);
         console.log('right');
       }else{
          
          this.onLeftarrow(x2);
          console.log('left');
        }

       
      console.log('onTouchMove', e.nativeEvent.touches[0].clientX);   
    
}

onTouchEnd(e) {
  this.state.x1 = 0;
 console.log('onTouchEnd', e.nativeEvent);
}


render (){   
    const {slideIndex,current, slides,index,opacity} = this.state;
    return(
     <div>
     <div className="flex-wrapper">
        <Counter current = {current}
        />
        <Slider slideIndex = {slideIndex} 
        onLeftarrow = {this.onLeftarrow} 
        onRightarrow = {this.onRightarrow}
        onTouchStart = {this.onTouchStart}
        onTouchMove={this.onTouchMove} 
        onTouchEnd={this.onTouchEnd}
        
       >          
        </Slider>             
        < Dots onDots ={this.onDots} 
        slideIndex = {slideIndex}
        slides = {slides.length} 
        index={index}
        opacity={opacity}
           />
                        
      </div>    
      </div>
      )
  }
}

