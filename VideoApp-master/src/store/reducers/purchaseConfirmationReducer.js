const initState = {
    purchaseStatus: ''
}

const purchaseConfirmationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PURCHASE_CONFIRMED':
            return {
                ...state,
                purchaseStatus: true
            };
        case 'PURCHASE_DENIED':
            return {
                ...state,
                purchaseStatus: false
            };
        default:
            return state;
    }
}

export default purchaseConfirmationReducer;