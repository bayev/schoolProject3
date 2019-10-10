import React from 'react';


//higher order funktion som skapar fördefinerade  session funktioner åt admin komponent
const SessionHandler = session => MyComponent => {
    return class extends React.Component{
        constructor(props){
            super(props)
            this.session = session;
            this.state = { 
                orderStatus: null,
                userPn: "",
                userVerified:false,
                errorMessage:'',
                successMessages: ''
            }
        }

        componentDidMount(){

            // lyssnar på varifiering av köp           
            this.session.session.on('signal:PURCHASES', event => {
                let product = JSON.parse(event.data);
                console.log(product);
                this.setState({
                    successMessages: JSON.stringify({message: 'Order Success', name: product.name})
                })

                setTimeout(()=>{
                    this.setState({
                        successMessages:''
                    })
                },5000)

            })
            
            // user cancels the product offer
            this.session.session.on('signal:USER_CANCLE_PRODUCT', event => {
                this.setState({
                    errorMessage:'user denies product'
                })
                setTimeout(()=>{
                    this.setState({
                        errorMessage:''
                    })
                },5000)

                
            })

            this.session.session.on('signal:USER_VERIFICATION', event => {
                console.log(event.data)
                this.setState({
                    userPn: event.data,
                    userVerified: true,
                    successMessage: 'Customer Successfully verified'
                })

                setTimeout(()=>{
                    this.setState({
                        successMessages:''
                    })
                },5000)

            })
            // tar emot verifiering från user

            this.session.session.on('signal:USER_CANCLE_VERIFICATION', event => {
                
                this.setState({
                    userVerified:false,
                    errorMessage:'user denies/fails verification'
                })
                setTimeout(()=>{
                    this.setState({
                        errorMessage:''
                    })
                },5000)
                console.log(this.state.errorMessage)
            })
        }
        componentWillUnmount(){
            this.session.session.off()
        }
        sendItem = (object) => {
            if(object){
                this.session.session.signal({
                    to: this.session.sub,
                    type: "SALES_ITEM",
                    data: JSON.stringify(object),
                })
            } 
        }
        sendVerification = () => {
                this.session.session.signal({
                    to: this.session.sub,
                    type:"VERIFICATION",
                    data:{customerInfo:''}
                })
                this.setState({
                    userVerified:'loading'
                })
        }



        render(){ 
            return(
                <MyComponent
                    userPn={this.state.userPn} 
                    subscriber={this.session.sub}
                    session={this.session}
                    getSessions={this.getSessions}
                    sendItem={this.sendItem}
                    sendVerification={this.sendVerification}
                    userVerified={this.state.userVerified}
                    errorMessage={this.state.errorMessage}
                    successMessages={this.state.successMessages}
                    />
            )
        }
    }
}


export default SessionHandler;