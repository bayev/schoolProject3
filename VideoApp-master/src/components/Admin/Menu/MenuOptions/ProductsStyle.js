import styled from 'styled-components';

export const Products = styled.div `
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

export const SearchDiv = styled.div `
    width: 90%;
    font-size: 1.2em;
    margin: auto;
    display:flex !important;
    margin-bottom: 5%;

`

export const ProductContainer = styled.div `
    width: 90%;
    margin:auto;
    height: 7%;
    color: #fff;
    border-color: #084C50;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-top: 3%;

    i{
        font-size: 25px;
        color:blacK;
        margin-left: 3%;
    }

    div{
        color: black;
        padding-left: 3%;

            h4{
                margin:0;
            }
    }
`

export const ArrowDown = styled.div` 
display:flex;
justify-content: center;
i {
        position: absolute;
        bottom:0;
        font-size: 20px;
}
    
`

