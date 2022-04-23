import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './Podcasts.css';

class Podcasts extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1100 : {
                items: 7,
            }
        },
    }
    render() {
        return (
            <div>
                 <div className="col-sm-12" style={{height: 10}}>      

<h5 className="para" style={{textAlign:'left', color: 'white'}}>Podcasts </h5> 

</div>  
                < OwlCarousel 
    className="owl-theme"
    loop items={10} margin={10} nav responsive = {this.state.responsive} dots= {false} 
   
    >
    <div ><img  className="image" src= {'images/events-2.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/events.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    <div ><img  className="image" src= {'images/owl-1.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Title</p></div>
    {/* <div class="item"><h4>12</h4></div> */}
</OwlCarousel>
            </div>
        );
    }
}

export default Podcasts;