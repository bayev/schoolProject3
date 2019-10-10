import React, { Component } from 'react';
import * as Styles from './ShoppingCartStyles';

class ShoppingCart extends Component {
    render() {
        return (
            <Styles.cartContainer>
                <i className="fas fa-shopping-cart" />
            </Styles.cartContainer>
        )
    }
}

export default ShoppingCart;