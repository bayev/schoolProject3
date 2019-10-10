import React, { Component } from 'react';
import styled from 'styled-components';
import PaymentOption from '../PaymentOption/PaymentOption';
import { TakeOver } from './confirmStyles';

const ConfirmFailed = styled.div`
    width: 90%;
    height: 90%;
    z-index: 40;
    position: absolute;
    border-radius: 7px;
    text-align: center;
    right: 5%;
    top: 5%;
    background-color: white;
    h1{
        font-size: 3em;
        padding-top: 20%;
        color: rgb(220, 0, 0);
        font-weight: light;
    }
    p:first-of-type{
        font-size: 1.2em;
        font-weight: light;
    }
    p:last-of-type{
        font-size: 1.5em;
        font-weight: bold;
        color: grey;
    }
    div i{
        font-size: 5em;
        padding: 15%;
        color: rgb(220, 0, 0);
    }
    button:first-of-type{
        width: 90%;
        padding-top: 6%;
        padding-bottom: 6%;
        background-color: rgb(60, 174, 248);
        color: white;
        border-radius: 7px;
        font-size: 1.4 em;
        margin-bottom: 2%;
    }
    button:last-of-type{
        width: 90%;
        padding-top: 6%;
        padding-bottom: 6%;
        background-color: rgb(240, 0, 0);
        color: white;
        border-radius: 7px;
        font-size: 1.4 em;
        margin-bottom: 2%;

    }
`


class ConfirmNo extends Component {

    state = {
        isHidden: false,
        tryAgain: false
    }

    handleIsHidden = () => {
        this.setState({ isHidden: true })
    }

    handleTryAgain = () => {
        this.setState({ tryAgain: true })
    }




    render() {
        const errorMessage = "Insufficent funds";

        if (this.state.isHidden === true) {
            return null;
        } else if (this.state.tryAgain === true) {
            return <PaymentOption />
        } else {
            return (
                <div>
                    <TakeOver />
                    <ConfirmFailed>
                        <div>
                            <h1>Betalning Misslyckad!</h1>
                            <p>Din betalning gick inte igenom</p>
                            <p>{errorMessage}</p>
                            <div><i className="far fa-frown-open"></i></div>
                            <button onClick={this.handleTryAgain}>Försök igen</button>
                            <button onClick={this.handleIsHidden}>Avsluta</button>
                        </div>
                    </ConfirmFailed>
                </div>
            );
        }
    }
}


export default ConfirmNo;
