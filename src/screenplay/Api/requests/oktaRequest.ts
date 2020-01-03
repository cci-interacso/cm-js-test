import Axios, { Method, AxiosRequestConfig } from "axios/index";
require('dotenv').config();



export const okTa: myRequest = {

    username:process.env.SPANISH_INTERNAL_USERNAME,
    password:process.env.SPANISH_INTERNAL_PASSWORD,
    options:{ 
       warnBeforePasswordExpired:true,
       multiOptionalFactorEnroll:true
    }

}


interface myRequest {
    username: string;
    password: string;
    options: {
        warnBeforePasswordExpired:boolean;
        multiOptionalFactorEnroll:boolean
    }
}





 

