import axios from 'axios';

export const Signup = (creds) => {
    console.log("Creds : ",creds);
    // return axios.post('',{

    // })
    return new Promise((resolve, reject) => {
        resolve(creds)
    })
}