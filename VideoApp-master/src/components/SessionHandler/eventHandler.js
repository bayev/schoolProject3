import React from 'react';
import {connect} from 'react-redux';


// HOC Som tar emot subscribtion user från state i redux och retunerar komponent med props
const EventHandler = MyComponent => {
    const Wrapper = () => {
       return (
            class extends React.Component{
                state ={
                    showItem: !true,
                    salesItem: {},
                    verification: false,
                }
                
                componentWillMount(){
                    // Tar emot signal från salesItem
                    this.props.session.on('signal:SALES_ITEM', event => {
                        const data = JSON.parse(event.data)
                        // sätter showItem till true så att när en signal tas emot visas item komponent
                        this.setState({
                            showItem: true,
                            salesItem: data,
                            verification:false,
                        })
                    })
                      
                    //verification
                    this.props.session.on('signal:VERIFICATION', event => {
                        this.setState({
                            showItem: false,
                            verification:true
                        })
                    // här skapar vi en condition som gör att Verifierings komponenten visas
                    // vi sätter verifiering true om verifiering sker, då ska en trigger event skicka tillbaka svar.
                    })    
                }

                // En funktion som ska dölja item komponenten om man klickar buy/exit & verifiering
                HideItemComponent = () =>{
                     this.setState({
                        salesItem: null,
                     }) 
                     this.props.session.signal({
                        to: this.props.subReducer.connection,
                        type: 'USER_CANCLE_PRODUCT',
                        data: '',
                    })
                }
                
                OrderConfirmed = (salesItem) => {
                    this.setState({
                        salesItem: null,
                     })
                     console.log("skickar signal")
                     this.props.session.signal({
                        to: this.props.subReducer.connection,
                        type: 'PURCHASES',
                        data: JSON.stringify(salesItem),
                    })
                }

                HideUserVerificationComponent = () => {
                    this.setState({
                        verification:false,
                    })
                    this.props.session.signal({
                        to: this.props.subReducer.connection,
                        type: 'USER_CANCLE_VERIFICATION',
                        data: '',
                    })
                }

                sendUserVerification = (pn) =>{
                    this.props.session.signal({
                        to: this.props.subReducer.connection,
                        type: 'USER_VERIFICATION',
                        data: pn,
                    })
                    this.setState({
                        verification:false,
                    })
                }

                render() {
                        if(this.state.showItem){
                           return (<div>
                               {/* byta ut fakeShopItem med item komponent sen */}
                               {/* FakeShopItem(item)  */}
                               <MyComponent
                               verification={this.state.verification}
                               buyItem={this.buyItem}
                               removeItem={this.HideItemComponent}
                               orderConfirmed={this.OrderConfirmed}
                               salesItem={this.state.salesItem}
                               {...this.props}/>
                                 </div>)
                        } else {
                            return <MyComponent
                            sendUserVerification={this.sendUserVerification} 
                            connection={this.props.subReducer.connection} 
                            verification={this.state.verification}
                            removeItem={this.HideUserVerificationComponent}
                            />
                        }
                }
            }
        )
    }
    return connect(mapStateToProps)(Wrapper())
}

const mapStateToProps = state => ({
    subReducer: state.subReducer
})

export default EventHandler;