import React  from "react";
import Slider from "react-slick";
import img1 from '../../resources/img1.jpeg';
import img2 from '../../resources/img2.jpeg';
import img3 from '../../resources/img3.jpeg';
import img4 from '../../resources/img4.jpeg';
import img5 from '../../resources/img5.jpeg';
import img6 from '../../resources/img6.jpeg';
import classes from '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';





const clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
       
      <div className={classes.clients_carrousel}>
      
       
       
       <Container fluid>
         <Row>
           <Col lg={{span:6,offset:6}}  sm={{span:7,offset:5}} md={{span:6,offset:5}} xs={{offset:4,span:8}}>
           
       <h3 className={classes.card_Choose} > <span >Our Clients</span> </h3>
       
      
       </Col>
         </Row>
       </Container>
       
       
           
      
       <Container  >
         <Row>
           <Col  lg={{offset:3,span:9}} md={{span:12,offset:0}} sm={{offset:0,span:12}}  xs={{offset:0,span:12}} >
        <div  >
        <Slider {...settings} >
          <div>
            <img src={img1} alt="firstclient" width="100" height="100" style={{borderRadius:'50%'}}/>
          </div>
          <div>
          <img src={img2}  width="100"  alt="secondclient" height="100" style={{borderRadius:'50%',border:'1px solid #ccc'}} />
          </div>
          <div>
          <img src={img3}  width="100" alt="thirdclient" height="100" style={{borderRadius:'50%'}}/>
          </div>
          <div>
          <img src={img4}  width="100"  alt="fourthclient" height="100" style={{borderRadius:'50%'}} />
          </div>
          <div>
          <img src={img5}  width="100" alt="fifthclient"  height="100" style={{borderRadius:'50%'}} />
          </div>
          <div>
          <img src={img6}   width="100" alt="sixthclient"  height="100" style={{borderRadius:'50%'}} />
          </div>
        </Slider>
        </div>
        </Col>
         </Row>
       </Container>
      
        <br/>
        <br/>
        <br/>
      </div>
    );
  }

       
   


export default clients;