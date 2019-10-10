import styled from 'styled-components';


export const ProductContainer = styled.div`
    width: 90%;
    margin:auto;
    background-color: #fff;
    height: 7%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-top: 3%;
    border: 1px solid #084c50;
    h4{
        padding-left: 3%;
    }
    button{
        border: none;
        background: transparent;
        margin-left: 3%;
    }

    i{
        font-size: 25px;
        outline: none;
        color: #084c50;
    }

    div{
        color: black;
        padding-left: 3%;
        width: 100%;

            h4{
                margin:0;
            }
    }
`

export const Button = styled.button`
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
    
    :active{
        background-color: #084c50;
        color: #fff; 
    }
    `