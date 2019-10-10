import React from 'react';
import * as Styles from './ServicesStyle';

const services = (props) => {
    return (
            <Styles.Services className="verification" > 
                <Styles.FlexDiv>
                    <h1> Tjänstbeskrivning</h1>
                    <i className="fas fa-times" onClick={props.closeMenu}/>
                </Styles.FlexDiv>

                <Styles.Form onSubmit={(e) => props.offerService(e)} >
                    <Styles.Input className="ui input">
                        <input
                            style={{border:"none", outline:"none", fontsize: "1.2em"}}  
                            type="text" 
                            id="form-input-control-title" 
                            placeholder="Title"
                            onChange={ (e) => props.onFormChange (e)} 
                            value={props.services.name}/>
                    </Styles.Input>

                    <Styles.Textarea className="field">
                        <textarea
                            style={{border:"none", outline:"none"}} 
                            id="form-textarea-control-opinion" 
                            placeholder="Description" 
                            rows="10"
                            onChange={ (e) => props.onFormChange (e)} 
                            value={props.services.description}
                        />
                    </Styles.Textarea>

                    <Styles.Input className="ui input">
                        <input
                            style={{border:"none", outline:"none", fontsize: "1.2em"}} 
                            type="text" 
                            id="form-input-control-price" 
                            placeholder="Price"
                            onChange={ (e) => props.onFormChange (e)} 
                            value={props.services.price}
                        />
                    </Styles.Input>
                    
                    <Styles.Button className="field">
                        <button>Skicka</button>
                    </Styles.Button>

                </Styles.Form>

             </Styles.Services>
        
        
    )
}

export default services