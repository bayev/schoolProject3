import React, { Component } from 'react';
import * as Styles from './CallMenuStyle';
//import ShoppingCart from '../ShoppingCart/ShoppingCart';


class CallMenu extends Component {

    state = {
        clickedIcon: '',
    }


    eventHandler = (event) => {
        this.setState(({
            clickedIcon: event.target.getAttribute('name')
        }));
    }

    render() {
        return (

            <div>
                <Styles.IconContainer>
                    <i className="fas fa-video" name="reverseCamera" onClick={this.eventHandler}></i>
                    <i className="fas fa-phone" name="cancelCall" style={{ backgroundColor: "#b10000", transform: "rotate(225deg)" }} onClick={this.eventHandler}></i>
                    <i className="fas fa-microphone-slash" name="muteMicrophone" onClick={this.eventHandler}></i>
                </Styles.IconContainer>
            </div>
        );
    }
}

export default CallMenu;

