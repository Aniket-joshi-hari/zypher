import React, { Component } from 'react';
import classes from './App.css';
import Sidebarprop from './sidebarprop';
import './App.css';



class BootstrapSidebar extends Component  {
    state={

     menu:[{id:'1',mname:'Overview',classes:[classes.active],icon:['fas fa-search-plus'],link:['/']},{id:'2',mname:'Details',icon:['fa fa-info-circle'],link:['/detail'],classes:[]},{id:'3',mname:'Rack',icon:['fas fa-box-open'],link:['/rack'],classes:[]},{id:'4',mname:'Map',icon:["fas  fa-map-marker-alt" ],link:['/map'],classes:[]},{id:'5',mname:'Payment',icon:['fas fa-rupee-sign'],link:['/payment'],classes:[]}],
     location : ''
    }
    clickListener=(index) =>{
        console.log(index);
            var men = this.state.menu;
            for (let item of men){
                item.classes = [];
            }
            men[index].classes = [classes.active];
            this.setState({
                 menu : men
            })


    }


    componentDidMount= (index) =>{
        const location =window.location.pathname ;
        if(this.state.menu[index] === location){
            
          
        }
        this.setState({
            location : location
        })
    }

    render(){
      console.log(this.state.location);
        

        const menu=(
            
            <div  >
          {
            this.state.menu.map((event,index) =>{
                 return <Sidebarprop icon={event.icon} styles={event.link} click={() => {this.clickListener(index)}} eventName={event.mname} classes={event.classes}  key={event.id}  connect={event.link}  />
      
            }
              )
          
          }
          </div>
          );
        
    return (
        <div className={classes.wrapper}>
    <div className={classes.sidebar} data-color="orange">
        <div  className={classes.logo} >
            
        </div>
        
        <div className={classes.sidebar_wrapper} style={{marginTop:'55px'}}>
            <ul className={classes.nav}>
                


                {menu}



                
            </ul>
        </div>
    </div>
   
</div>

            




        
    );
}
};

export default BootstrapSidebar;