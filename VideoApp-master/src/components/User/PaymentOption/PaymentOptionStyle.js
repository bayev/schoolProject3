import styled from 'styled-components';



export const OptionContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    width:80%;
    height: 25%;
    align-items: center;
    justify-content: center;
`;

export const SpanLeft = styled.span`
    display: flex;
    left: 2%;
    width: 26%;
    align-items: center;
    justify-content: center;
`;

export const SpanRight = styled.span`
    display: flex;
    right: 2%;
    width: 70%;
    margin-left:5px;
    align-items: center;
    justify-content: center;
    box-sizing:border-box;
`;

export const Radio = styled.button`
border-width: 8px;
border-radius: 50%;
outline: none;
`;

export const Container = styled.div`
    margin: 2%;
    z-index: 3;
    background-color: rgb(246,246,246);
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0px;
    right: 0;
    height: 98%;
    width: 96%;
    align-items: center;

        i {
            position:absolute;
            top: 2%;
            right: 2%;
            font-size: 30px;
        }
`;

export const PayButton = styled.button`
font-size: 14px;
display:flex;
justify-content: center;
width: 100px;
height: 30px;
margin: 10px;
border-radius: 5px;
background-color: #4382cc;
outline: none;
border: none;
`;
