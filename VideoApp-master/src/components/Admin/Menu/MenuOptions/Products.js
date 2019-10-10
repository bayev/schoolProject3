import React from 'react';
import * as Styles from './ProductsStyle';
import FetchProduct from './fetchproduct/FetchProduct';



const Products = (props) => {
    return (
        <Styles.Products> 
            <Styles.FlexDiv className="DisplyFlex">
                <h1>Produktlista</h1>
                <i className="fas fa-times" onClick={props.closeMenu}/>
            </Styles.FlexDiv>
            
            <Styles.SearchDiv className="ui input">
                <input 
                type="text" 
                placeholder="Search..." 
                value={props.searchValue}
                onChange={props.onSearchFunction}   
                />
            </Styles.SearchDiv>

            <FetchProduct 
            searchValue={props.searchValue} 
            sendItem={props.sendItem}    
            />
 
            <Styles.ArrowDown >
                <i className="fas fa-chevron-down"/>
            </Styles.ArrowDown>
            
        </Styles.Products>
    )
}

export default Products;