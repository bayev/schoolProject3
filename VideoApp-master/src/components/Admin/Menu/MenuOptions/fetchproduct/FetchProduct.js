import React, { Component } from 'react';
import * as Styles from './ProductStyles';
//Importera connect från react-readux så vi kan använda mapStateToProps och mapDispatchToProps
import { connect } from 'react-redux';
//Importera selectProduct ("action" för att välja produkt)
import { selectProduct } from '../../../../../store/actions/fetchProductAction';
//Importera komponenten som används för att visa upp innehållet i den valda produkten
import ProductOnDisplay from './ProductOnDisplay';



class FetchProduct extends Component {

    //Vi använder choosenProduct = null i komponenten för att ha ett neutralt val innan man väljer produkt
    state = {
        choosenProduct: null
    }
    //När man väljer produkten så läggs produktinfo till i state
    handleChange = (e) => {
        this.setState({
            choosenProduct: {
                ID: e.uid,
                name: e.name,
                price: e.price,
                currency: e.currency,
                URL: e.url
            }
        })
        //"Send"-knappen dyker upp när produkten är vald
        document.getElementById("sendMerch").style.visibility = "visible";
    }

    //Vi stoppar reaload med e.preventDefault och skickar this.state till action med selectProduct() för vidare hantering
    handleSubmit = (e) => {
        e.preventDefault()
        //Skapa variabel för att inte använda orginal-variabeln
        let advisorChoosenProduct = this.state.choosenProduct;
        console.log(advisorChoosenProduct)
        this.props.selectProduct(advisorChoosenProduct);
        this.props.sendItem(advisorChoosenProduct)
    }

    render() {
        //För att lättare hantera props och state så deklarerar vi mer hanterbara namn
        const productList = this.props.productList;
        const displayProduct = this.state;
        const searchValue = this.props.searchValue;
        console.log(productList)

        return (

            <div>
                {/* Vi mappar ut product list och använder JSON.stringify() på produkt-objektet så att vi ska får ett riktig objekt och inte [object Object] */}
                {searchValue.length > 0 ?

                    productList.filter((i) => i.name.toUpperCase().includes(searchValue.toUpperCase())).map((product) => {
                        return (
                            <Styles.ProductContainer key={product.uid} >
                                <button defaultValue={"DEFAULT"} value={JSON.stringify(product)}><i onClick={this.handleChange.bind(this, product)} className="fas fa-plus-circle" /></button>
                                <div>
                                    <h4 value={product.name}>{product.name}</h4>
                                    <div value={product.price}>{product.price} {product.currency}</div>
                                </div>
                            </Styles.ProductContainer>
                        )
                    })

                    :

                    productList.map((product, uid) =>
                        <Styles.ProductContainer key={uid} >
                            <button defaultValue={"DEFAULT"} value={JSON.stringify(product)}><i onClick={this.handleChange.bind(this, product)} className="fas fa-plus-circle" /></button>
                            <div>
                                <h4 value={product.name}>{product.name}</h4>
                                <div value={product.price}>{product.price} {product.currency}</div>
                            </div>
                        </Styles.ProductContainer>
                    )}
                <form onSubmit={this.handleSubmit}>
                    {/* Ladda in komponenten som visar upp innehållet i komponenten, vi skickar också ner this.state i komponenten */}
                    <ProductOnDisplay displayProduct={displayProduct} />
                    <Styles.Button type="submit" id="sendMerch">Send</Styles.Button>
                </form>
            </div>
        )
    }
}

//Hämta JSON-filen från reducer
const mapStateToProps = (state) => {
    return {
        productList: state.fetchReducer.productList
    }
}
//Skicka den valda produkten till action
const mapDispatchToProps = (dispatch) => {
    return {
        selectProduct: (product) => dispatch(selectProduct(product))
    }
}

//Använd high-order-component för att ta in mapStateToProps och mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(FetchProduct);