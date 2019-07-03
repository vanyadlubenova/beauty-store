import React, { Component } from 'react'
import { checkout, decreaseQuantity } from '../UserFunctions'
import { ProductConsumer } from '../../context';
import PayPalButton from './PayPalButton'

class Checkout extends Component {
    
    constructor(){
        super()
        this.state = {
            address: '',
            phone: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return (
            <section>
            <ProductConsumer>
                    {(value) => {
                    const { cart, clearCart, cartTotal} = value;
                    return (
                    <div className="container">
                        <div className="form-group">
                            <label htmlFor="address">Shipping Address</label>
                            <input type="text" 
                            className="form-control" 
                            name="address"
                            placeholder="Enter Shipping Address"
                            value={this.state.address}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" 
                            className="form-control" 
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={this.state.phone}
                            onChange={this.onChange}
                            />
                        </div> 
                        <div className="row my-2 text-capitalize text-center">
                        <button className="btn btn-lg btn-primary btn-block" type="button"
                            onClick={() => {

                                for(var i = 0; i < cart.length; i++) {
                                    decreaseQuantity(cart[i]._id, cart[i].quantity - cart[i].count);
                                } 

                                const check = {
                                    address: this.state.adrress,
                                    phone: this.state.phone,
                                }
                                checkout(cart, check).then(res => {
                                    clearCart();
                            })
                                }
                            }
                            >
                                checkout
                            </button>
                            </div>

                        {localStorage.usertoken ? 
                            <PayPalButton 
                            total={cartTotal}
                            clearCart={clearCart}
                            address={this.state.address}
                            phone={this.state.phone}
                            cart={cart}
                            /> : 
                            <h4 className="text-pink">You need to login before paying</h4>}
                        

                    </div>
                    )
                }}
            </ProductConsumer>
            </section>
            
        )
    }
}

export default Checkout