import * as types from '../constants/actionTypes'
import Axios from 'axios'

const getUsers=(users) => ({
    type:types.GET_USERS,
    payload:users,
})

const deleteUsers=() => ({
    type:types.DELETE_USER
})

export const loadUsers = () =>{
    return function(dispatch) {
        Axios.get(`${process.env.REACT_APP_API}`)
        .then((response) =>{
            console.log("la reponse est: "+response)
            dispatch(getUsers(response.data))
        })
        .catch((error) =>console.log("la reponse est: "+error))
    }
};

export const deleteUser = (id) =>{
    return function(dispatch) {
        Axios.delete(`${process.env.REACT_APP_API}${id}`)
        .then((response) =>{
            console.log("la reponse est: "+response)
            dispatch(getUsers(response.data))
        })
        .catch((error) =>console.log("la reponse est: "+error))
    }
}





