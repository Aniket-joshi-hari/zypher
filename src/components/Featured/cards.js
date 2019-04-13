import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import classes from '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Cardui from './cardChild';

const styles = {
    card: {
      maxWidth: 345,
      marginTop: '5px'
      
     
    },
    media: {
  
      objectFit: 'cover',
    },

    
  };

class cards extends Component {
    
state = {
  cardUi : [
{id:"1",customerimage: require('../../resources/slide_two.jpg'),heading:' Unlimited Book Swaps',
content:' Never get Tired of Reading or over spend on books. Swap your books as you wish, anytime' +
'Get it delivered at your home or office',share:'Share',learnmore:'Learn More',sm:['{4}'],lg :'span:3,offset:4'},

{id:"2",customerimage: require('../../resources/slide_two.jpg'),heading:' Wallet Friendly',
content:' Ardent Reader? '+
'Someone catching up on Quiet weekends?'+
'A Student, with a thirst for knowledge?'+
'Find Plans that understands your wallet.',share:'Share',learnmore:'Learn More',sm:'{4}',lg:'{3}'},

{id:"3",customerimage: require('../../resources/slide_two.jpg'),heading:'  Zero Security Deposit',
content:'Yup that is right We know the pain of heavy upfront Deposits,That is why we make sure we charge no security deposit for our users',
share:'Share',learnmore:'Learn More',sm:'{4}',lg:'{3}'}
  ]
  
}
  render(){

    const card=this.state.cardUi.map((card,index) =>{
      
      return  (<Col sm={4}  lg={3}  key={card.id}>
      <Cardui customerimage={card.customerimage} heading={card.heading} content={card.content} share={card.share} learnmore={card.learnmore} />
      </Col>)
     
    });

    return (
        <div className={classes.card_container} >
           




         
         <Container  >
                <Row>
                <Col  lg={{span:5,offset:5}}>
                <div className={classes.card_heading_con}>
                <h3 className="text-center">Why Choose</h3>
                </div>
                
                </Col>
         
                    </Row> 
          </Container>            
             <Container>
               <Row>
               <Col lg={{span:0,offset:3}}>  
               </Col>
                
         {card}

         
    </Row></Container>           

    </div>
       );
      }
   };
   
   export default withStyles(styles)(cards) ;






         