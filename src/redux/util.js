export const createAction = (type, payload=null) => {
    return {
        type: type,
        payload: payload
    }
}