import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './Albums.css';


class Albums extends Component {
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

<h5 className="para" style={{textAlign:'left', color: 'white'}}>Albums </h5> 

</div>  
                < OwlCarousel 
    className="owl-theme"
    loop items={10} margin={10} nav responsive = {this.state.responsive} dots= {false} 
   
    >
    <div ><img  className="image" src= {'images/album-1.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Inauduble</p></div>
    <div ><img  className="image" src= {'images/album-2.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Wild Nauge</p></div>
    <div ><img  className="image" src= {'images/album-3.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Here with me</p></div>
    <div ><img  className="image" src= {'images/album-4.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Smile</p></div>
    <div ><img  className="image" src= {'images/album-5.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Chill beats</p></div>
    <div ><img  className="image" src= {'images/album-6.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Drake</p></div>
    <div ><img  className="image" src= {'images/album-7.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Unforgettable</p></div>
    <div ><img  className="image" src= {'images/album-8.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Lover</p></div>
    <div ><img  className="image" src= {'images/album-9.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Almost</p></div>
    <div ><img  className="image" src= {'images/album-10.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Pink Sky</p></div>
    <div ><img  className="image" src= {'images/album-11.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Whale Stock</p></div>
    <div ><img  className="image" src= {'images/album-12.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Study</p></div>
    <div ><img  className="image" src= {'images/album-13.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Chill hop</p></div>
    {/* <div class="item"><h4>12</h4></div> */}
</OwlCarousel>
            </div>
        );
    }
}

export default Albums;