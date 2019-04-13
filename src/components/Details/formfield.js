import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "../../App.css";
import {Link,Redirect} from 'react-router-dom';
class Formfield extends Component {

    
    state = {
        firstName: '',
        lastName: '',
        BName : '',
        BType : '',
        otherBType : '',
        email: '',
        phoneNumber : '',
        checkBox : '',
        nameValidationMsg : '',
        lastNameValidaionMsg : '',
        BNameValidationMsg : '',
        BTypeValidationMsg : '',
        otherBtypeValidation : '',
        emailvalidationMsg : '',
        phoneNumberValidationMsg : '',
        checkBoxValidationMsg : '',
        redirect: false,
        
       
       
        

        
    };

   



    

    
    
   
    validateUserInputs = () => {

        

      

        let formIsValid = true;
        if(!this.state.firstName){
           
            
          this.setState({
            nameValidationMsg : 'Enter a valid name'
          })
          formIsValid = false;
        }
        else{
            this.setState({nameValidationMsg : ''})
            
        }
       
        if(!this.state.lastName ){
           

            
          this.setState({
            lastNameValidaionMsg : 'Enter a valid lastName'
          })
          formIsValid = false;
        }
        
        if(!this.state.BName ){

           

         this.setState({
           BNameValidationMsg : 'Enter valid Business Name'
         })
         formIsValid = false;
       }  
        
       if(!this.state.BType ){
        
        
     this.setState({
       BTypeValidationMsg : 'Enter valid Business Type'
     })
     formIsValid = false;
   }    
   
    
   if(!this.state.email ){
   

    
        this.setState({
            emailValidationMsg : 'Enter a valid email'
        })
        formIsValid = false;  

    }
   
   
    if(!this.state.phoneNumber ){
       
       
     this.setState({
       phoneNumberValidationMsg : 'Enter a valid PhoneNumber'
     })
     formIsValid = false;
    }
   

   if(!this.state.checkBox){
   

       
       this.setState({
        checkBoxValidationMsg: 'Accept Terms and Condition'
       })
       formIsValid = false;

}
        
      
    
         return formIsValid;
      }

   
    fNamehandleChange = (event) => {
       
        this.setState({
            firstName : event.target.value
        });
    }

    lNamehandleChange = (event) => {
        this.setState({
            lastName : event.target.value
        });
    }


    BNamehandleChange = (event) => {
        this.setState({
            BName : event.target.value
        });
    }



    BTNamehandleChange = (event) => {
        this.setState({
            BType : event.target.value
        });
    }


    otherBTypeNamehandleChange = (event) => {
        this.setState({
            otherBType : event.target.value
        });
    }


    emailNamehandleChange = (event) => {
        this.setState({
            email : event.target.value
        });
    }



    phoneNamehandleChange = (event) => {
        this.setState({
            phoneNumber : event.target.value
        });
    }

    checkboxhandleClick = (event) => {
        this.setState({
            checkBox : event.target.checked
        })
    }
    
    formsubmit=()=>{
        
        this.props.submitForm(this.state.firstName,this.state.lastName,this.state.BName,this.state.BType,this.state.otherBType,this.state.email,this.state.phoneNumber,this.state.checkBox);
        this.setState({
            redirect : true
        })
        
        
    }

    renderRedirect = () => {
       
        if (this.state.redirect) {
          return <Redirect to='/rack'  />
        }
      }

    render() {
        console.log(this.state);

        
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 5 }} md={{span:6,offset:3}} sm={{span:8,offset:2}}>
                            <div  className={classes.cardform}>
                                <h5 className="card-header info-color white-text text-center py-2">
                                    <strong>Please Enter Your Details</strong>
                                </h5>

                                <div className="card-body px-lg-5 pt-0">




                                
                                    <form 
                                        
                                        style={{ color: "#757575" }}
                                    >
                                        <div className="form-row">
                                            <div className="col mt-3">
                                                <div className="md-form">
                                                   

                                                    <div className="ui input">
                                                    <input type="text" placeholder="First Name"
                                                    className="form-control"
                                                    value={this.state.firstName}
                                                   
                                                    onChange={ (e) => this.fNamehandleChange(e)} />

                                               
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col mt-3">
                                                <div className="md-form">
                                                    
                                                    <div className="ui input">
                                                    <input type="text" placeholder="Last Name"
                                                     className="form-control"
                                                     value={this.state.lastName}
                                                     onChange={this.lNamehandleChange} />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                         <span style={{color:'red',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.nameValidationMsg}
                                            
                                                        </span>


                                                        <span style={{color:'red',marginLeft:'15%',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.lastNameValidaionMsg}
                                            
                                                        </span>
                                        <div className="md-form mt-3">
                                          

                                            <div className="ui input" style={{width:'100%'}}>
                                                <input type="text" placeholder="Business Name" 
                                                className="form-control"
                                                value={this.state.BName}
                                                
                                                onChange={ (e) => this.BNamehandleChange(e)}/>
                                                </div>
                                            
                                        </div>
                                        <span style={{color:'red',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.BNameValidationMsg}
                                            
                                                        </span>



                                        

                                        <div className="md-form mt-3">
                                            


                                         <select name="Business Type"   style={{borderRadius:'7px' }} multiple=""  placeholder="Business Type"  className="ui fluid dropdown" value={this.state.BType}  onChange={this.BTNamehandleChange}>
                                         <option value="Business Type">Business Type</option>
                                        <option value="cafe">Cafe</option>
                                        <option value="gym">Gym</option>
                                        <option value="spa">Spa</option>
                                        <option value="hotel">Hotel</option>
                                        <option value="restaurant">Restaurant</option>
                                        <option value="boutique">Boutique</option>
                                        <option value="apartments">Apartments</option>
                                        <option value="co-living">Co-living</option>
                                        <option value="co-working">Co-working</option>
                                        <option value="office">Office</option>
                                        <option value="other">Other</option>
                                        
                                        </select> 
                                        
                                        </div>

                                        <span style={{color:'red',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.BTypeValidationMsg}
                                            
                                                        </span>

                                        {this.state.BType==='other'?
                                         <div className="md-form mt-3">
                                          

                                         <div className="ui input" style={{width:'100%'}}>
                                             <input type="text" placeholder="Enter Business Type" 
                                             className="form-control"
                                             value={this.state.otherBType}
                                             
                                             onChange={ (e) => this.otherBTypeNamehandleChange(e)}/>
                                             </div>
                                         
                                     </div> :null}





                                       

                                        <div className="md-form mt-3">
                                           

                                            <div className="ui input" style={{width:'100%'}}>
                                            <input type="text" placeholder="Email "
                                             className="form-control"
                                             aria-describedby="materialRegisterFormPhoneHelpBlock"
                                             value={this.state.email}
                                             onChange={this.emailNamehandleChange} 
                                             style={{width: '100%'  }}/>
                                            </div>
                                           

                                        </div>

                                        <span style={{color:'red',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.emailValidationMsg}
                                            
                                                        </span>

                                       


                                        <div className="md-form mt-3">
                                            
                                        
                                        <div className="ui left labeled input "  style={{width:'100%'}} >
                                        <label htmlFor="amount" className="ui label" style={{fontSize:'14px'}}>+91</label>
                                        <input type="tel"  id="amount"  
                                        value={this.state.phoneNumber}
                                        onChange={this.phoneNamehandleChange} />
                                        <div ></div>
                                        </div>
                                        

                                        <span style={{color:'red',fontSize:'11px'}}
                                               
                                            >
                                                {this.state.phoneNumberValidationMsg}
                                            
                                                        </span>

                                        </div>  
                                        

                                        

                                        <br />
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="materialRegisterFormNewsletter"
                                                checked= {this.state.checkBox}
                                                onChange={this.checkboxhandleClick}
                                                
                                            />
                                            <label
                                                
                                               
                                                htmlFor="materialRegisterFormNewsletter"
                                                
                                            >
                                                I accept <Link to="/termsconditions" style={{color:'blue'}}>terms</Link> and <Link to="/termsconditions" style={{color:'blue'}} >conditions</Link>
                                            </label>
                                        </div>
                                        

                                        
                                            
                                           
                                           <span style={{color:'red',fontSize:'11px'}}
                                               
                                               >
                                                   {this.state.checkBoxValidationMsg}
                                               
                                                           </span>
   
                                      
                                      
                                       <div>
                                           
                                    {this.renderRedirect()}
                                        <div className={classes.formfieldButton}
                                        
                                         onClick= { (e) =>{
                                             
                                             if(!this.validateUserInputs()){
                                                alert("please enter valid inputs");
                                             }
                                             else {
                                                 return  this.formsubmit(e)
                                                //  
                                             }
                                    
                                        }
                                    }
                                    // this.props.submitForm(this.state.firstName,this.state.lastName,this.state.BName,this.state.BType,this.state.otherBType,this.state.email,this.state.phoneNumber,this.state.checkBox)

                                         

                                        
                                        
                                           
                                         >
                                             
                                           
                                            
                                         
                                           
                                              

                                            Submit
                                        </div>
                                        </div>
                                
                                        
                                        
                                       

                                        <br/>
                                       
                                              <p className="text-center">Join Our Community </p> 
                                            
                                            
                                          
                                            {/* buttons */}
                                        <div className="text-center">
                                        <a href ="https://www.facebook.com/zyphercrew"
                                            type="button" style={{color:'#fff',background:'#3C5A99',fontSize:'14px',width:'13%'}}
                                            className="btn-floating btn-fb btn-sm p-2 mr-2 text-center"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="https://www.instagram.com/zypher.co/"
                                            type="button" style={{color:'#fff',background:'#e4405f',fontSize:'14px',width:'13%'}}
                                            className="btn-floating btn-tw btn-sm p-2 mr-2"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="//www.linkedin.com/company/teamzypher"
                                            type="button"  style={{color:'#fff',background:'#4875B4',fontSize:'14px',width:'13%'}}
                                            className="btn-floating btn-li btn-sm p-2 mr-2"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a  href="//www.linkedin.com/company/teamzypher" style={{color:'#fff',background:'#4875B4',fontSize:'14px', width:'13%'}}
                                            type="button"
                                            className="btn-floating btn-git btn-sm p-2 "
                                        >
                                            <i className="fab fa-github" />
                                        </a>
                                        </div>
                                        <hr />
                                    </form> 
                                </div>
                            </div>

   
                            
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        );
    }
}

export default Formfield;