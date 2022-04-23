// import './Disc.css';
import React from 'react';

class DiscountCalculator extends React.Component {

    
    constructor() {
      super();
      this.state = {
        price: 0,
        discount1: 0,
        discount2: 0,
        total: 0,
        finalPrice: 0
      }
     
     this.handleChange = this.handleChange.bind(this);
  
    }
    
    /* update values on change */
    handleChange(event) {
      this.setState({
        [event.target.name] : event.target.value
      },
      () => {
        this.setState({
          total: this.totalDiscount(),
          finalPrice: this.getFinalPrice()
        })
      });
    }
    
    /* calculate and return total discount */
    totalDiscount() {
      return (Math.abs((((1-(this.state.discount1/100))*(1-(this.state.discount2/100)))-1)*100)).toFixed(2);
    }
    
    getFinalPrice() {
        return (this.state.price-(this.state.price*this.totalDiscount()/100)).toFixed(2); 
      }
    
    render() {
      return <div>
                <h6>Apply for Discount </h6>
                {/* <h1>{this.state.price}$ - {this.state.total}% = {this.state.finalPrice}$</h1> */}
                <label>
                  Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                  <input 
                    name="price" 
                    value={this.state.price}
                    onChange={this.handleChange}
                    type="number"
                    step="0.05"
                    min="0"/>
                  
                </label>
                <br />
                <label>
                  Discount   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  <input 
                    name="discount1" 
                    value={this.state.discount1}
                    onChange={this.handleChange}
                    type="number"
                    min="0"/>
                  %
                </label>
                <br />
                <label >
                <h5 style={{color:"#EA1257"}}>Total</h5><h6>Price after discount</h6><h5 style={{color:"#EA1257"}}>{this.state.finalPrice}</h5>
                </label>
             </div>
    }
  };

  export default DiscountCalculator;