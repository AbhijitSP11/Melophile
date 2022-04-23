import React, { Component } from 'react';

class Discount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Discount: ""
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        localStorage.setItem('document', JSON.stringify(this.state));
    }
    handleInputChange = (event) => {
        event.preventDefault()
        /*  console.log(event)
          console.log(event.target.name)
          console.log(event.target.value)*/
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    render() {
        const { Discount } = this.state
        return (
            <div>
                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                    <ul class="list-group mb-3 ">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$5</span>
                </li> 
                </ul>
                    <form onSubmit={this.handleSubmit} class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" value={Discount} onChange={this.haneleInputChange} placeholder="Discount" name="Discount"  />
                            <div class="input-group-append">
                                <button value="submit" class="btn btn-secondary">Redeem</button>
                            </div>
                        </div>

                    </form>
                    </div>
                </div>
                </div>
        );
    }
}

export default Discount;