import axios from 'axios'

export const login = (email, password) => (dispatch) => {
    type: 'LOGIN',
    axios.post('https://private-d5cad-teste594.apiary-mock.com/login')
            .then((response => {
                console.log('response;', response)
                const { email, password } = response.data
                dispatch(addAuth(email, password))
                console.log('aqui')
            })).catch(error => {
                console.log('erro')
                dispatch(addError(error))
            })
}
export const addAuth = (email, password) => ({
    type: 'ADD_AUTH',
    payload: { email, password }
})

export const addError = (error) => ({
    type: 'ADD_ERROR',
    payload: error
})