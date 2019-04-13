import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import classes from "../../App.css";
import Rack from "./rack";
import {Link} from "react-router-dom";

class index extends Component {
  state = {
    selectedIndex: null,
    cardContent: [
      { id: "1", cardHeading: "20 Books", price: "50" ,col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link:'/map',src: require('../../resources/img1.jpeg') },
      { id: "2", cardHeading: "50 Books", price: "120", col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map',src: require('../../resources/img2.jpeg')},
      { id: "3", cardHeading: "100 Books", price: "200",col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map',src: require('../../resources/img3.jpeg') }
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

 
  render() {
    console.log(this.props.rack);
  const card = 
  // cardCss={card.cardS}
      this.state.cardContent.map((card,index) => {
        return <Rack price={card.price} button={card.button} style={{margin:'8px auto',width:'60%'}}  cardCss={card.cardS} src={card.src} key={card.id} click={ () => this.props.clickEvent(index)} class={card.col}  cardBody={card.cardB} priceHeading={card.cardH} ul={card.ul} li={card.span} check={card.check} link={card.link} />
      }
    
      )
      ;

    //
    return (
      <div  className={classes.rack_main}>
        <Container className="mt-4 center">
          <Row>
            <Col  lg={{span:9,offset:3}}>
            {/* Hello {this.props.form[0].fname} */}
                {/* <h4 className="text-center" > Welcome to Zypher  </h4> */}
                <h3 className="text-center">Choose Your Rack</h3>
                </Col>
            </Row>
        </Container>
              


              {/* code for new cards */}

              <Container className="mt-4"  >
                <Row>
                <Col lg={{span:9,offset:3}}>
                <section className={classes.pricing}>
  <div className="container">
    <div className="row">
      
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
      form : state.persons
  }
}
const mapDispatchToprops =dispatch => {
  return{
    clickEvent : (id) => dispatch({type :'UPDATE_Rack',rackid : id})
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(index);





