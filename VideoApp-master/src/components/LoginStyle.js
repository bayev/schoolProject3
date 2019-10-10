import styled from 'styled-components';

export  const LoginContainer = styled.div `
    width: 100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    

`

export  const LogoContainer = styled.div `
    height:60%;
    width:100%;
    background:#084C50;
    border-bottom:5px solid;
    border-color: transparent transparent #084C50 transparent;
    border-radius: 60%/ 0 0 50px 50px;
    display:flex;
           img{
            width: inherit;
            max-width: 600px;
            height: inherit;
           }
        
    

`

export  const LoginForm = styled.div `
    height:40%;
    width: 100%;
    text-align:center;

           form{
            display: flex;
            align-items: center;
            justify-content: center;

                button{
                width: 85%;
                border: 3px solid #084C50;
                border-radius:10px;
                background: #084C50;
                font-size: 1.5em;
                color: white;
                padding: 3% 0%;
                position: absolute;
                bottom: 10%;
                max-width: 600px;
                }
                
                button:hover{
                background: #084C50;
                color:white;
                }
           }
    
        

`

