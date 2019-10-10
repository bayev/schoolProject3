import React from 'react';
import * as Styles from './MenuStyle';
import Verification from './MenuOptions/Verification';
import Products from './MenuOptions/Products';
import Services from './MenuOptions/Services';





class Menu extends React.Component {

    render() {
        return (
            <div>
                <Styles.BurgerIcon >
                    <i className="fas fa-bars" onClick={this.props.showMenuOnClick} />

                    <Styles.ToggleMenu
                        onClick={this.props.iconClick}
                        ismenuhidden={this.props.StateToProps.isMenuHidden}
                    >
                        <Styles.VerifyIcon className="fas fa-user" name="Verification" isverified={this.props.userVerified} />
                        <i className="fas fa-shopping-cart" name="Products" />
                        <i className="fas fa-briefcase" name="Services" />
                    </Styles.ToggleMenu>

                </Styles.BurgerIcon>

                {this.props.StateToProps.clickedIcon === 'Verification' ? <Verification
                    userPn={this.props.userPn}
                    verifyCustomer={this.props.verifyCustomer}
                    isverified={this.props.StateToProps.isverified}
                    userVerified={this.props.userVerified}
                    
                /> :
                this.props.StateToProps.clickedIcon === 'Products' ? <Products
                    closeMenu={this.props.closeMenu}
                    searchValue={this.props.StateToProps.searchValue}
                    onSearchFunction={this.props.onSearch}
                    sendItem={this.props.sendItem}
                /> :

                 this.props.StateToProps.clickedIcon === 'Services' ? <Services
                    offerService={this.props.offerService}
                    closeMenu={this.props.closeMenu}
                    onFormChange={this.props.onFormChange}
                    services={this.props.StateToProps.services}
                /> :

                            null}
            </div>

        )
    }
}

export default Menu;