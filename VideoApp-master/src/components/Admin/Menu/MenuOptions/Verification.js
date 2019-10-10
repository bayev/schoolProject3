import React from 'react';
import * as Styles from './VerificationStyle';

const LoadingButton = () => (
        <button className="ui loading primary button"/> 
    )


const CustomerInfo = (props) => {
    return(
        <Styles.CustomerInfo>
            <h2>Personnummer:<br/> {props.userPn}</h2>
        </Styles.CustomerInfo>
    )
}

const VerifyCustomer = (props) => {
    return(
        <button className="ui primary button"
        onClick={props.verifyCustomer}
    >
        Verifiera Kund
        </button>
    )
}



const verification = (props) => {
 console.log(props)
    return (
        <Styles.Verification > 
            <Styles.VerificationContent > 
                {props.userVerified === true ? <CustomerInfo userPn={props.userPn}/> :
                props.userVerified === 'loading' ? <LoadingButton/> :
                <VerifyCustomer 
                    verifyCustomer={props.verifyCustomer}
                />}
             </Styles.VerificationContent>
         </Styles.Verification>
    )
}

export default verification

