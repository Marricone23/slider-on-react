import React, {Component} from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props){
   super(props);
    this.state = {
      current: 1,     
      };
    }

  render (){ 
  const {current} = this.props;
        return(
          <div>
                <div className="slider-counter">
               <span id="current">0{current}
               </span>
                / <span id="total">04
               </span>
               </div>  
         </div>
        );      
    }   
};
   

export default Counter;
