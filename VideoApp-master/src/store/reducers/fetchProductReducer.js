import mockDatabase from '../mock/mockDatabase.json';

const initState = {
    productList: mockDatabase
}

const fetchProductReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_SUCCESS':
            console.log('Fetch product success', action.advisorProduct);
            return state;
        case 'FETCH_PRODUCT_ERROR':
            console.log('Fetch product error');
            return state;
        default:
            return state;
    }
}

export default fetchProductReducer;
