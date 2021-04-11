import React from 'react';
import axios from 'axios';
import {BACKEND_URL} from "../../constants";


export default  function CheckUserTokenValidity(TOKEN){
    return axios.get(BACKEND_URL+'user-routes/check-user-validity',{
        headers: {
            'Authorization' : `Bearer ${TOKEN}`
        }
    });


}
