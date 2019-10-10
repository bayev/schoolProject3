import styled from 'styled-components';


export const Services = styled.div `
    position: absolute;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    z-index: 3;
    background-color: #fff;
    color: #084C50;
    width: 100%;
`

export const FlexDiv = styled.div `
    display:flex;
    justify-content: center;
        h1{
            text-align: center;
            margin: 1% 0 3% 0;
        }
        i{
            position: absolute;
            top: 2%;
            right: 6%;
            font-size: 20px;
        }
    `
export const Form = styled.form`
    width: 95%;
    margin: auto;
`

export const Input = styled.div`
    border: 1px solid #084c50; 
    width: 100%;
    margin-bottom: 5%;
`

export const Textarea = styled.div`
    border:1px solid #084C50;
    margin-bottom: 5%;
    textarea{
        width: 100%;
    }`


export const Button = styled.div `
    display:flex;
    justify-content:center;

    button{
        display:block;
        width: 125px;
        height: 40px;
        border: 1px solid #084c50;
        background-color: #084c50;
        border-radius: 10px;
        color: #fff; 
        font-size:1.5em;
        box-shadow: none;
        margin: 15px auto;
        outline: none;
        }
`

