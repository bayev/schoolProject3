import React, { Component } from 'react';
import { connect } from 'react-redux'
import purchaseConfirm from '../../../store/actions/purchaseAction';
import ConfirmYes from './ConfirmYes';
import ConfirmNo from './ConfirmNo';
import * as Styled from './confirmStyles'


class PurchaseConfirmation extends Component {

    state = {
        isHidden: false,
    }

    handleIsHidden = () => {
        this.setState({ isHidden: true })
    }

    handlePay = (e) => {
        const randomNumber = Math.floor(Math.random() * 1)
        console.log(randomNumber)
        if (randomNumber === 0) {
            this.props.purchaseConfirm(true)
        }
        else {
            this.props.purchaseConfirm(false)
        }
    }

    render() {

        //Här hämtar man in information om företag och summa att betala från reducer
        const information = {
            companyName: "Aragogs Bläckfiskar",
            companyFullName: "Tveksamt Miljö AB",
            amount: 9000.01
        }

        const { purchaseStatus } = this.props;
        if (this.state.isHidden === true) {
            return null;
        }
        else if (purchaseStatus === true) {
            return <ConfirmYes paymentDone={this.props.paymentDone} />
        } else if (purchaseStatus === false) {
            return <ConfirmNo PaymentDeclined={this.props.PaymentDeclined} />
        } else {
            return (
                <div>
                    <Styled.TakeOver />
                    <Styled.PaymentBox>
                        <div>Betala</div>
                        <div>
                            <h1>{information.companyName}</h1>
                            <h4>{information.companyFullName}</h4>
                        </div>
                        <div>
                            <h5>Belopp</h5>
                            <h2>{`${information.amount.toFixed(2)} `}<span>SEK</span></h2>
                        </div>
                        <div>
                            <p>Mobilt BankID kommer att öppnas på din enhet för att verifiera betalningen</p>

                            <button onClick={this.handlePay}>Betala</button>
                            <button onClick={this.handleIsHidden}>Avbryt</button>
                        </div>
                    </Styled.PaymentBox>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        purchaseStatus: state.purConfirmReducer.purchaseStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseConfirm: (purchase) => dispatch(purchaseConfirm(purchase))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseConfirmation);
