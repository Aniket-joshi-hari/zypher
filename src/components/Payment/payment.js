import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import classes from "../../App.css";
import Rack from "./rack";
import {Link} from "react-router-dom";
import axios from "axios";


class index extends Component {
  state = {
    form: [],
    rack: '',
    selectedIndex: null,
    cardContent: [
      { id: "1", cardHeading: "20 Books", price: "50" ,col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link:'/map'},
      { id: "2", cardHeading: "50 Books", price: "120", col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map'},
      { id: "3", cardHeading: "100 Books", price: "200",col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map' }
    ],
    style: [{ id: "", background: "", border: "", button: false }],

    classes: [
      classes.rack_item,
      classes.rack_item1,
      classes.rack_item2,
      classes.rack_item3
    ],
    button: [{ display: "none" }]
  };

  // clickEvent = index => {
  //   console.log("clicked");
  //   let count = index + 1;
  //   console.log(count);

    // this.setState({
    //   style: {
    //     background: "#fff",
    //     border: "2px solid blue"
    //   },
    //   selectedIndex: index,
    //   button: true
    // });
  // };


  // handledata

  sendingData = (index) => {

    let dataToSend={...this.props.form};
    dataToSend.userId=this.props.rack;
    dataToSend.map={...this.props.map} ;
    dataToSend.ContactForm={...this.props.ContactForm};
    console.log(dataToSend);
    axios.post( 'https://jsonplaceholder.typicode.com/posts', dataToSend)
            .then( response => {
                console.log(response);
               
            } )
            

   
  }



  render() {
    // console.log(window.location.pathname);
    // console.log(this.state.form);
    console.log(this.props);
    // console.log(this.props.rack); 
    
  

  const card = 
    
      this.state.cardContent.map((card,index) => {
        return <Rack price={card.price} button={card.button} key={card.id} click={ () => this.sendingData(index)} class={card.col}  cardCss={card.cardS} card={card.card} cardBody={card.cardB} priceHeading={card.cardH} ul={card.ul} li={card.span} check={card.check} link={card.link} />
      }
    
      )
      ;


    



     


    //
    return (
      <div  className={classes.rack_main}>
        <Container className="mt-4 center">
          <Row>
            <Col  lg={{span:9,offset:3}}>
           
                
                <h2 className="text-center">Payment</h2>
                </Col>
            </Row>
        </Container>
              


              {/*  for cards */}

              <Container className="mt-4"  >
                <Row>
                <Col lg={{span:9,offset:3}}>
                <section class="pricing py-5" className={classes.pricing}>
  <div class="container">
    <div class="row">
      
        {card}
      
    </div>
  </div>
</section>
</Col>
</Row>
</Container>


             
              <Link to="/payment">
              <button
                style={this.state.button[0]}
                className={classes.rack_button}
              >
              
                Next
              </button>
              </Link>
            
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      rack : state.rack,
      form : state.persons,
      map : state.map,
      ContactForm: state.ContactForm
  }
}
const mapDispatchToprops =dispatch => {
  return{
    clickEVENT : (id) => dispatch({type :'UPDATE_Map',rackid : id})
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(index);





