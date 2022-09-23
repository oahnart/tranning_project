

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

// export const getUsers = () => async dispatch => {
//     const response = await dataUsers.get('/users');
//   dispatch({ type: 'GET_USERS', payload: response });
// };    

export default {
    logOut
}
