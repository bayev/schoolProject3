import styled from 'styled-components';

export const Verification = styled.div `
    display:flex;
    justify-content: center;



`
export const CustomerInfo = styled.div `
    text-align:center;
    height:100%;
        h2{
            /* position: absolute;
            top: -60px; */
            color:#084C50;
            }
`

export const VerificationContent = styled.div `
    position: absolute;
    bottom: 10%;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 50px;
    height: 12%;
    width: 90%;
    align-items: center;
    justify-content: center;
    display: flex;

        button {
            width: 50%;
            height: 50%;
            color: #084C50;
            background-color:#084C50 !important;
        }
`
