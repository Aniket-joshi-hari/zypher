import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/header-img.jpeg';


import img1 from '../../resources/family.jpeg';
import img2 from '../../resources/fashion.jpeg';
import img3 from '../../resources/form-img.jpeg';

const Carrousel = () => {

    const settings = {
      dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };
    return (
      <div>



        <div 
            
            style={{
                height:'50vh',    
                overflow:'hidden',
                marginTop:'0px'
              
                
            }}
        >
        
            <Slider {...settings}>
          <div>
            <img src={slide_one} alt="img1"  width="100%" style={{backgroundSize:'cover' }}/>
          </div>
          
          <div>
         <img src={img1} alt="img2" style={{backgroundSize:'cover'}} width="100%" />
          </div>
          <div>
            <img src={img2} alt="img3" style={{backgroundSize:'cover'}} width="100%"/>
          </div>
          <div>
            <img src={img3}  alt="img4" style={{backgroundSize:'cover'}}  width="100%"/>
          </div>
        </Slider>
            
        </div>

        

       



            
      
      </div>
    );
};

export default Carrousel;