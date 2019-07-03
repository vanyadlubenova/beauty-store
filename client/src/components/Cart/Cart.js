import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Checkout from './Checkout';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0)
                        {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <hr class="mt-5 mb-5" />

            <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-3">
            <h5>
            </h5>
            <h5>
            <span className="text-title">enter delivery information:</span>
            </h5>
               <Checkout />
            </div>
            <div className="col-10 mx-auto col-lg-3">
            <CartTotals value={value} history={this.props.history} />
            </div>
            </div>

                                    
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
