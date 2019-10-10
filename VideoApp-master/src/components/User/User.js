import React, { Component } from 'react';
// import * as Styles from './UserStyle';
import CallMenu from './CallMenu/CallMenu';
import eventHandler from '../SessionHandler/eventHandler'
import SalesItem from '../User/SalesItem/SalesItem'
import VeriyComponent from '../User/Verify/Verify';
import PaymentOption from './PaymentOption/PaymentOption';
import PausingVideo from './PauseVideo/PauseVideo';
import PurchaseConfirmation from './PurchaseConfirmation/PurchaseConfirmation'

class User extends Component {
    
    state = ({
        isVerified: false,
        PaymentOption:false,
        PausingVideo:false,
        PaymentSelected: false,
    })

    verifyCustomerFunction = (event, pn) => {
        event.preventDefault()
        this.setState({
            isVerified: true
        })
        this.props.sendUserVerification(pn)
    }
    // visa payment options
    PaymentOption = () => {
        this.setState({
            PaymentOption: true,
        })
    }
    //göm payment Options och visa selected payment
    PaymentSelected = () => {
        console.log("clicki")
        this.setState({
            PaymentOption: false,
            PaymentSelected: true,
        })
    }
    //återgå till payment Options
    PaymentDeclined = () => {
        console.log("paymentOption = " + this.state.PaymentOption)
        this.setState({
            PaymentOption: true,
            PaymentSelected: false,
        })
    }
    // avklarat köp
    paymentDone = () => {
        this.props.orderConfirmed(this.props.salesItem);
        this.ResumeVideo()
    }

    PuasingVideo = () => {
        this.setState({
            PausingVideo:true
        })

        setTimeout(() => {
            this.PaymentOption()
            console.log('funkar')
        }, 4000);
    }


    ResumeVideo = () => {
        this.setState({
            PausingVideo:false,
            PaymentSelected: false,
            PaymentOption:false,
        })
    }
    PreRenderFunction = (salesItem) => {
        // const { foisVerifiedo, PaymentOption, PausingVideo  } = this.state

        return(
            <div>
                <CallMenu/>


               {
                   this.props.salesItem
                ? <SalesItem
                    PuasingVideo={this.PuasingVideo}
                    removeItem={this.props.removeItem}
                    salesItem={this.props.salesItem}
                    
                    /> 
                : null
                }

                {
                    this.props.verification === true
                    ? <VeriyComponent 
                        verifyCustomerFunction={this.verifyCustomerFunction}
                        removeItem={this.props.removeItem}
                    />
                    : null
                }

                {this.state.PausingVideo ?
                 <PausingVideo
                    ResumeVideo={this.ResumeVideo}
                  />
                  : null}

                  {this.state.PaymentOption ?
                 <PaymentOption
                    PaymentSelected={this.PaymentSelected}
                    UserClicksOnBuy={this.PaymentOption} 
                    ResumeVideo={this.ResumeVideo}
                 />
                  : null}
                  {
                    this.state.PaymentSelected ? 
                    <PurchaseConfirmation 
                    PaymentDeclined={this.PaymentDeclined }
                    paymentDone={this.paymentDone}  
                    />
                    : null
                  }
            </div>
        )
    }


    render() {
     
        // preRender
        return (
            <div>
                 {this.PreRenderFunction()}
            </div>
        )
    }
}

export default eventHandler(User);
