
export const purchaseConfirm = (purchase) => {
    return (dispatch, getState) => {

        const userPurchase = purchase;

        if (!userPurchase) {
            dispatch({ type: 'PURCHASE_DENIED' })
        } else {
            dispatch({ type: 'PURCHASE_CONFIRMED', userPurchase })
        }
    }
}

export default purchaseConfirm;