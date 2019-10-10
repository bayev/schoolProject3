import React from 'react';
import Menu from './Menu/Menu';
import SessionHandler from '../SessionHandler/Sessionhandler';
import Notifications from './Notifications'

// import * as Styles from './AdminStyle';
const MyAdmin = (session) => {
    const Admin = SessionHandler(session)(AdminBase)
    return <Admin/>
}
// Här styrs logiken för vilka Admin komponenter som ska visas..
// också logiken för signaling etc
class AdminBase extends React.Component{

    state={ sub: {},
            searchValue:'',
            isMenuHidden: true,
            clickedIcon: '',
            isverified:false,
            userVerified:false,
            userPn: "",
            services: {
                name: '',
                description:'',
                price: ''
            }
         }
   

    showMenuOnClick = () =>{
        this.setState(prevState => ({
            isMenuHidden:!prevState.isMenuHidden,
            clickedIcon: ''
  
        }));
    }

    iconClick = (event) => {
        this.setState(({
            isMenuHidden:true,
            clickedIcon: event.target.getAttribute('name')
        }));
    }

    closeMenu = (event) => {
        event.preventDefault()
        this.setState({
            clickedIcon: ''
        })
    }

    onSearch = (event) => {
        this.setState({
            searchValue:event.target.value
        })
    }

    verifyCustomer = () => {
        this.props.sendVerification();
    }

    offerService = (event) => {
        this.props.sendItem(this.state.services)
        this.closeMenu(event);
    }

    onFormChange = (event) => {
        if(event.target.placeholder === 'Title'){
            this.setState({
                services: {
                    name: event.target.value,
                    description:this.state.services.description,
                    price: this.state.services.price
                }
            })
        }
        if(event.target.placeholder === 'Description'){
            this.setState({
                services: {
                    name: this.state.services.name,
                    description: event.target.value,
                    price: this.state.services.price
                }
            })
        }
        if(event.target.placeholder === 'Price'){
            this.setState({
                services: {
                    name: this.state.services.name,
                    description: this.state.services.description,
                    price: event.target.value
                }
            })
        }
    }

    send = (obj) => {
        this.props.sendItem(obj)
    }

    render(){
        return(
            <div>
                {this.props.errorMessage || this.props.successMessages ? <Notifications successMessages={this.props.successMessages} errorMessage ={this.props.errorMessage}/> : null}
                <Menu 
                // Funktioner
                sub={this.state.sub}
                sendItem={this.send}
                showMenuOnClick={this.showMenuOnClick}
                iconClick={this.iconClick}
                closeMenu={this.closeMenu}
                onSearch={this.onSearch}
                verifyCustomer={this.verifyCustomer}
                onFormChange={this.onFormChange}
                userPn={this.props.userPn}
                userVerified={this.props.userVerified}
                offerService={this.offerService}
                
                // State
                StateToProps={{...this.state}}
                />
            </div>
           
        )
    }   
}

export default MyAdmin;