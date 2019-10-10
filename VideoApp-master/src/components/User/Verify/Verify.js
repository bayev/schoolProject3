import React from 'react';
import * as Styles from './VerifyStyle';

class VeriyComponent extends React.Component{
    state ={
        pn: ""
    }
    render(){
        return(
        <Styles.FlexDiv>
            <Styles.VerifyCardContainer>
                <div className="ui card" style={{width:'100%', display:'flex', justifyContent: 'center'}}>
                    <div className="content" style={{textAlign: 'center'}}>
                        <div className="header" style={{color:'#084C50'}}>
                            Verifiering
                        </div>
                        <p>Vänligen verifiera dig för att gå vidare i samtalet</p>
                    </div>

                    <Styles.FlexDiv>
                        <div className="ui focus input" style={{width:'90%'}}>
                            <input 
                                type="text" 
                                name="pn" 
                                placeholder="Personnummer..."
                                value={this.state.name}
                                onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                            />
                        </div>
                    </Styles.FlexDiv>

                    <div className="extra content">
                        <div className="ui two buttons">
                            <button 
                            className="basic button"
                            onClick={ (e) => this.props.verifyCustomerFunction(e,this.state.pn)}>
                                    Approve
                             </button>

                            <button 
                            className="basic button" 
                            onClick={() => this.props.removeItem()}>
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </Styles.VerifyCardContainer>
        </Styles.FlexDiv>
        )
    }
}

export default VeriyComponent