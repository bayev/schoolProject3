import React, { Component } from 'react';
import * as Styles from './PaymentOptionStyle';
import klarna from './images/klarna.png';
import Swish_Logo from './images/Swish_Logo.png';
import mastercard from './images/mastercard.png';


const imgKlarna = {
    color: '#fff',
    height: '100px',
    width: '150px',
    background: `url(${klarna})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

const imgSwish = {
    color: '#fff',
    height: '100px',
    width: '150px',
    marginLeft: '0',
    background: `url(${Swish_Logo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};
const imgMastercard = {
    color: '#fff',
    height: '60px',
    width: '150px',
    // margin: '25px 0 0 15px',
    background: `url(${mastercard})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};


class PaymentOption extends Component {
    render() {

        return (
            
            <Styles.Container>
                 <i className="fas fa-times" onClick={() => this.props.ResumeVideo()}/>
                <Styles.OptionContainer>
                    <Styles.SpanLeft>
                        <Styles.Radio type="radio" name="klarna">  </Styles.Radio>
                    </Styles.SpanLeft>
                    <Styles.SpanRight style={imgKlarna}></Styles.SpanRight>
                </Styles.OptionContainer>

                <Styles.OptionContainer>
                    <Styles.SpanLeft>
                        <Styles.Radio type="radio" name="swish">  </Styles.Radio>
                    </Styles.SpanLeft>
                    <Styles.SpanRight style={imgSwish}> </Styles.SpanRight>
                </Styles.OptionContainer>

                <Styles.OptionContainer>
                    <Styles.SpanLeft>
                        <Styles.Radio type="radio" name="mastercard">  </Styles.Radio>
                    </Styles.SpanLeft>
                    <Styles.SpanRight style={imgMastercard}></Styles.SpanRight>
                </Styles.OptionContainer>

                <div style={{ display: "flex", width: "170px" }}>
                    <Styles.SpanLeft style={{ width: "20px" }}><input type="checkbox" /></Styles.SpanLeft>
                    <Styles.SpanRight style={{ fontSize: "10px", color: "rgb(8, 68, 164)", textAlign: "left", marginLeft: "10px", textDecoration: "underline" }}>Godkänn köpvillkoren </Styles.SpanRight>
                </div>

                <Styles.PayButton
                onClick={this.props.PaymentSelected}
                type="button"> 
                Betala</Styles.PayButton>

            </Styles.Container>
        )
    }
}

export default PaymentOption;




