import styled from 'styled-components';

export const PaymentBox = styled.div`
    z-index: 40;
    width: 90%;
    height: 90%;
    background-color: white;
    position: absolute;
    border-radius: 7px;
    text-align: center;
    right: 5%;
    top: 5%;
    div:first-of-type{
        padding: 8%;
        font-size: 1.8em;
        font-weight: bold;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(to left, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        border-image-slice: 1;
    }
    span{
        font-size: 0.7em;
    }
    h1{
        margin: 0;
        margin-top: 15%;
        font-size: 1.6em;
    }
    h2{
        margin: 0;
        padding: 3%;
    }
    h5{
        margin: 0;
        margin-top: 15%;
        font-weight: light;
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.3em;
    }
    h4{
        font-weight: 200;
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.2em;
        text-transform: uppercase;
        margin: 0;
    }
    span{
        padding: 1%;
    }
    p{
        margin-top: 10%;
        font-size: 1.2em;
        padding: 3%;
        font-weight: light;
        color: rgba(0, 0, 0, 0.5);
    }
    button:first-of-type{
        background-color: rgb(60, 174, 248);
        color: white;
        padding: 6% 35%;
        border-radius: 7px;
        font-size: 1.3em;
        margin-bottom: 3%;
    }
    button:last-of-type{
        background-color: white;
        color: rgb(60, 174, 248);
        padding: 6% 35%;
        border: none;
        font-size: 1.3em;
    }
`
export const TakeOver = styled.div`
    height: 100%;
    width: 100%;
    z-index: 30;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
`