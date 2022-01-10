import * as types from '../constants/actionTypes'
import Axios from 'axios'

const getUsers=(users) => ({
    type:types.GET_USERS,
    payload:users,
})

const userDeleted=() => ({
    type:types.DELETE_USER
})

const userAdded=() => ({
    type:types.ADD_USER
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
        Axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((response) =>{
            console.log("la reponse est: "+response)
            dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch((error) =>console.log("la reponse est: "+error))
    }
};

export const addUser = (user) =>{
    return function(dispatch) {
        Axios.post(`${process.env.REACT_APP_API}/`,user)
        .then((response) =>{
            console.log("la reponse est: "+response)
            dispatch(userAdded())
            
        })
        .catch((error) =>console.log("la reponse est: "+error))
    }
}




