//action för att ta emot en produkt
export const selectProduct = (product) => {
    return (dispatch, getState) => {

        const advisorProduct = product;
        console.log(advisorProduct)

        if (!advisorProduct) {
            dispatch({ type: 'FETCH_PRODUCT_ERROR' })
        } else {
            dispatch({ type: 'FETCH_PRODUCT_SUCCESS', advisorProduct })
        }
    }
}
