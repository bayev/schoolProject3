export const subscriberAction = (connection) => {
    return {
        type: 'SUBSCRIBER_CONNECTION',
        payload: connection,
    }
}
