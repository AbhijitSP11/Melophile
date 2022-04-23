import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
// import './carousle.css';
import $ from 'jquery';

const Carousle = (props) => {
    return (
        
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100" 
                        src="./images/thumb-5.jpg" style={{width:640, height:360}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="./images/thumb-6.jpg"style={{width:640, height:360}}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/thumb-7.jpg"style={{width:640, height:360}}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div> 

    );
}

export default Carousle;