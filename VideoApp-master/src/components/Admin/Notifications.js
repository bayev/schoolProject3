import React from 'react';
import * as Styles from './NotificationsStyle';

const ErrorMessages = (props) => {
    return(
        <div className="ui negative message">
            <div className="header">FELMEDDELANDE</div>
             <p>{props.errorMessage}</p>
        </div>
    )
}

const SuccessMessages = (props) => {
   const successMessage = JSON.parse(props.successMessages)
    return(
        <div className="ui success message">
            <div className="header">LYCKAT</div>
             <p>{successMessage.message}</p>
             <p>{successMessage.name}</p>
        </div>
    )
}

const Notification = ({errorMessage, successMessages}) => {
    return(
        <Styles.NotificationContainer>
           {successMessages ? 
            <SuccessMessages successMessages={successMessages}/> :
            errorMessage ? 
            <ErrorMessages errorMessage={errorMessage}/> :
            null}
        </Styles.NotificationContainer>
    )
}

export default Notification