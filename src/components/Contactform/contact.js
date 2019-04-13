import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import classes from './contact.css';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
class Contact extends Component  {
  
  state ={
    
      email : '',
      message : ''
    
  }


  emailformHandleChange = (event) => {
    this.setState({
      email : event.target.value
    })
    
  }


  messageformHandleChange = (event) => {
  this.setState({
    message : event.target.value
  })
  }
  render(){
    return (
        <div >

<Container>
    <Row>
        <Col className="mt-2"   lg={{span:8,offset:2}} md={{span:9,offset:1}} sm={{span:12,offset:0}}>

        <div className={classes.form}>
        <h4>Contact Us</h4>
<div className="ui form">
<div className="field">
  <label>E-mail</label>
    <input  type="email" placeholder="joe@schmoe.com"
    value={this.state.email}
    onChange={ (e) => this.emailformHandleChange(e)} />
  </div>  
  <div className="field">
    <label>Message</label>
    <textarea value={this.state.message} onChange={ (e) => this.messageformHandleChange(e)} />
  </div>

  <Button variant="primary" onClick={ () => this.props.clickEvent(this.state.email,this.state.message)}>Submit</Button>
 
</div>
</div>
<br /><br /><br />
</Col>
    </Row>
</Container>

            
        </div>
      
    );
  }
};

const MapDispatchToProps = (dispatch) =>{
  return{
    clickEvent : (email,message) => dispatch({type :'UPDATE_ContactUs',ContactInfo : {email : email, message : message}})
  }
  };

export default  connect(null,MapDispatchToProps) (Contact) ;