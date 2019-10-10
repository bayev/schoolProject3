import React from 'react';
import * as Styles from './LoginStyle';
import logo from '../assets/eyeoda_logo.png';

class Login extends React.Component {
    state = { Admin: false }


    onChange = (event) => {

        this.setState({
            [event.target.name]: event.target.checked
        })

    }

    onSubmit = (event) => {
        this.props.Admin(this.state.Admin)
        event.preventDefault();
    }

  

    render() {
        return (
                <Styles.LoginContainer>
                    <Styles.LogoContainer>
                        <img src={logo} alt="Smiley face" ></img>
                    </Styles.LogoContainer>

                    <Styles.LoginForm>
                            <form onSubmit={(event) => this.onSubmit(event)}>
                                <label> Välj om Admin <br/>
                                <input onChange={this.onChange} type="checkbox" name="Admin" />
                                </label>
                                <br />
                                <button> Logga in </button>
                            </form>
                    </Styles.LoginForm>
                </Styles.LoginContainer>
        )
    }
}

export default Login;