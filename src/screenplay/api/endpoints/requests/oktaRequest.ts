require('dotenv').config();

export const okTa: myRequest = {

    username:"automation.spain@clearchannelint.com",
    password:"TestUser.123",
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





 

