import styled from 'styled-components';


export const BurgerIcon = styled.div`
    position: absolute;
    top: 3%;
    left: 3%;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.9);
    margin: auto;
    width: 11%;
    height: auto;
    display: flex;
    flex-direction: column;

    i {
            color: #084C50;
            font-size: 36px;
            margin: auto;
            align-items: center;
        }
 `

export const ToggleMenu = styled.div `
    flex-direction: column;
    padding:15% 0 30% 0;
    display:${props => props.ismenuhidden ? "none" : "flex"};

    i {
            color: #084C50;
            font-size: 20px;
            margin: auto;
            align-items: center;
            padding-top: 50%;
        }    
`

export const VerifyIcon = styled.i `
    color: ${props => props.isverified ? 'darkblue' : "#084C50"}!important;
`
