import styled from 'styled-components';
//#084c50 peder style

export const SalesItemContainer = styled.div `
    z-Index:3;
    position: absolute;
    bottom:20%;
    left:3%;
    right:3%;
    color:black;
    background-color: rgb(255, 255, 255);
    display:flex;   
    flex-direction:column;
    padding-top:3%;

`


export const Rowone = styled.div `
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    
        div:nth-of-type(1){
            width:25%;
            height:auto;
            display:flex;
            justify-content:center;
            align-items: center;
        }

        div:nth-of-type(2){
            width:65%;
            margin:15px auto;

            *{
                margin-bottom:1%
            }
        }
`
export const CloseIcon = styled.div `
    position:absolute;
    top: 2%;
    right: 2%;
    font-size: 20px;
`

export const Rowtwo = styled.div `
    display:flex;
    justify-content: center;
        div{

                button{
                    margin:auto;
                }
        }
`
export const AcceptBtn = styled.button`
 width: 125px;
 height: 40px;
 border: 1px solid #084c50;
 background-color: #084c50;
 color: #fff;
 font-size:16px;
 box-shadow: none;
 margin: 13px 15px 13px 15px;
 border-radius: 10px;
`
export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border:none;
    box-shadow: none;
    background-color: #555;
    padding:0;
`