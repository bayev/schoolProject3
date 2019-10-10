import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
    width: 100%;
    border: 1px solid #084C50;
    background-color: #fff;
    border-radius: 5px;
    div{
        color: black;
        display: inline-block;
        padding: 2%;
    }
`

const Choice = Styled.div`
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    font-size: 1.2em;
    h3{
        color: #084c50;
    }
`

//Skapa komponent för att visa upp produkten och bryt ner innehållet i det nerpassade objektet
const ProductOnDisplay = ({ displayProduct }) => {

    //const för att göra produkten lättare att hantera
    const prod = displayProduct.choosenProduct;

    //Kontrollera så att om det finns en produkt så visar vi upp den
    if (displayProduct.choosenProduct) {
        return (
            <Choice>
                <h3>Ditt val</h3>
                <Div>
                    <div><h4>{prod.name}:</h4></div>
                    <div><strong>{prod.price}</strong></div>
                    <div>{prod.currency}</div>
                </Div>
            </Choice>

        )
    }

    //Om det inte finns en produkt så visar vi istället upp ett meddelande om att välja produkt
    else {
        return (<Choice>
            <h3>Var god och välj en produkt</h3>
        </Choice>
        )
    }

}

export default ProductOnDisplay;
