import React from 'react';
import { Link } from 'react-router-dom';
const rack = (props) => {
    return (
       
  
<div className={props.class}>
<div  className={props.cardCss}>
  <div className={props.cardBody}>
    
    <h6 className={props.priceHeading}> <i className="fas fa-rupee-sign"></i><span>{props.price}</span><span className={props.period}>/month</span></h6>
    <hr/>
    
      
      <img src={props.src}  alt="rack" style={{margin:'0px auto',width:'100%'}} />
      


      {/* <li><span class={props.li}><i class={props.check}></i></span>Unlimited Public Projects</li>
      <li><span class={props.li}><i class={props.check}></i></span>Community Access</li>
     
      <li ><span class={props.li}><i ></i></span>Dedicated Phone Support</li>
     
      <li ><span class={props.li}><i ></i></span>Monthly Status Reports</li> */}
    
    <Link to={props.link} className={props.button} onClick={props.click} style={props.style} >Submit</Link>
    
  </div>
  
</div>
</div>
    );
};

export default rack;