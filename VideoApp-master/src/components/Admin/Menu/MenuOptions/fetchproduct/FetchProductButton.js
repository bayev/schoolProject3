import React, { Component } from 'react'
import FetchProduct from './FetchProduct';

class FetchProductButton extends Component {

    state = {
        showFetchProduct: false
    }

    startFetchObject = () => {
        console.log(this.startFetchObject)
        this.setState({ showFetchProduct: true })
    }

    cancelFetchObject = () => {
        this.setState({ showFetchProduct: false })
    }

    render() {
        console.log(this.state.showFetchProduct)
        if (this.state.showFetchProduct) {
            return (
                <div>
                    <FetchProduct />
                    <button onClick={this.cancelFetchObject}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.startFetchObject}>Product list</button>
                </div>
            );
        }
    }
}


export default FetchProductButton
