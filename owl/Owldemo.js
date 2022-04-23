import React,{Component} from 'react';  

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './Owl.css';  


 

export class OwlDemo extends Component {  

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
            items: 3,
        },
    },
}

        render()  

        {      

          return (  

              <div>  

            <div className='container-fluid'>      

            <div className="row title"  >      

             <div className="col-sm-12" style={{height: 10}}>      

             <h5 className="para" style={{textAlign:'left', color: 'white'}}>Home </h5> 

            </div>       

            </div>  

        </div>  

         <div className='container-fluid' style={{marginTop:-12}}>   

          <OwlCarousel items={3} margin={15} autoplay ={true}  responsive = {this.state.responsive}>  

          <div><img  className="img" src= {'images/owl-1.png'}/></div>  

           <div><img  className="img" src= {'images/album-12.jpg'}/></div>  

           <div><img className="img" src= {'images/album-13.jpg'}/></div>  
           <div><img className="img" src= {'images/album-15.jpg'}/></div>  
           <div><img className="img" src= {'images/album-16.jpg'}/></div>
           <div><img  className="img" src= {'images/owl-4.jpg'}/></div>  
           <div><img className="img" src= {'images/alag-aasman.jpg'}/></div>  

           <div><img  className="img" src= {'images/owl-2.jpg'}/></div>  

           <div><img className="img" src= {'images/thumb-6.jpg'}/></div>  

           <div><img className="img" src= {'images/owl-7.jpeg'}/></div>  

           <div><img className="img" src= {'images/album-13.jpg'}/></div>  
           <div><img className="img" src= {'images/album-15.jpg'}/></div>  
           <div><img className="img" src= {'images/album-16.jpg'}/></div>  
           <div><img className="img" src= {'images/alag-aasman.jpg'}/></div>  
           <div><img className="img" src= {'images/album-11.jpg'}/></div>  
           <div><img className="img" src= {'images/owl-4.jpg'}/></div>  

      </OwlCarousel>  

      </div>  

      </div>  

          )  

        }  

      }  

        

  

export default OwlDemo  