import React, { Component } from 'react';
import styled from 'styled-components';
import { TakeOver } from './confirmStyles';

class ConfirmYes extends Component {

    handleIsHidden = () => {
        this.setState({ isHidden: true })
        this.props.paymentDone();
    }

    render() {
        if (this.state) {
            return null;
        } else {
            return (
                <div>
                    <TakeOver />
                    <Confirmed>
                        <div>
                            <h1>Betalning genomförd!</h1>
                            <p>Klicka på "OK" för att återgå till samtalet</p>
                            <div><i className="far fa-smile-beam"></i></div>
                            <button className="close" onClick={this.handleIsHidden}>OK</button>
                        </div>
                    </Confirmed>
                </div>
            );
        }
    }
}


const Confirmed = styled.div`
    width: 90%;
    height: 90%;
    position: absolute;
    border-radius: 7px;
    text-align: center;
    z-index: 40;
    right: 5%;
    top: 5%;
    background-color: white;
    h1{
        font-size: 3em;
        padding-top: 30%;
        color: rgb(0, 210, 0);
        font-weight: light;
    }
    div i{
        font-size: 5em;
        padding: 15%;
        color: rgb(1, 220, 1);
    }
    button{
        
        padding: 6% 40%;
        background-color: rgb(60, 174, 248);
        color: white;
        border-radius: 7px;
    }
`



export default ConfirmYes;
