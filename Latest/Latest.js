import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './Latest.css';

class Latest extends Component {
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

<h5 className="para" style={{textAlign:'left', color: 'white'}}>Latest </h5> 

</div>  
                < OwlCarousel 
    className="owl-theme"
    loop items={10} margin={10} nav responsive = {this.state.responsive} dots= {false} 
   
    >
    <div ><img  className="image" src= {'images/At my worst.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>At my worst</p></div>
    <div ><img  className="image" src= {'images/riha.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Riha</p></div>
    <div ><img  className="image" src= {'images/play-date.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Play date</p></div>
    <div ><img  className="image" src= {'images/ocean eyes.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Ocean Eyes</p></div>
    <div ><img  className="image" src= {'images/mishri.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Mishri</p></div>
    <div ><img  className="image" src= {'images/bookofyou.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Book of you and I</p></div>
    <div ><img  className="image" src= {'images/come-thru.png'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Come thru</p></div>
    <div ><img  className="image" src= {'images/At my worst.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>At my worst</p></div>
    <div ><img  className="image" src= {'images/Aisi-Raaton.jpg'}/><p style={{color:'white', fontSize:16, marginTop:6}}>Aisi Raaton</p></div>
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

export default Latest;