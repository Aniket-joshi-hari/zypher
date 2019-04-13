import React from 'react';
const rack = (props) => {
    return (
       
  
<div className={props.class}>
<div className={props.Card} className={props.cardCss}>
  <div className={props.cardBody}>
    
    <h6 className={props.priceHeading}> <i className="fas fa-rupee-sign"></i><span>{props.price}</span><span className={props.period}>/month</span></h6>
    <hr/>
    <ul className={props.ul}>
      
      <li><span className={props.li}><i className={props.check}></i></span>Unlimited Public Projects</li>
      <li><span className={props.li}><i className={props.check}></i></span>Community Access</li>
     
      <li ><span className={props.li}><i ></i></span>Dedicated Phone Support</li>
     
      <li ><span className={props.li}><i ></i></span>Monthly Status Reports</li>
    </ul>
    <button  className={props.button} onClick={props.click}>Submit</button>
  </div>
</div>
</div>
    );
};

export default rack;