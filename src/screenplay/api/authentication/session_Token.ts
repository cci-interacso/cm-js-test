import { okTa } from "../endpoints/requests/oktaRequest";
import axios, { AxiosResponse } from "axios";
require('dotenv').config();

async function getSessionToken() {

    const response = await axios({
        method: 'post',
        url: '/api/v1/authn',
        data: okTa,
        baseURL: process.env.OKTA,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response

}

async function getAccessToken(session_Token: any) {
    const response = await axios({
        method: 'get',
        url: "/oauth2/aus32jql6a3Egf1Xm357/v1/authorize/?state=state&client_id=0oag0a89cwNhcrOtc356&redirect_uri=http://localhost:43127/implicit/callback&response_type=id_token%20token&response_mode=fragment&scope=openid%20email%20profile%20entitlements&nonce=nonce&sessionToken=" + session_Token,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 500000,
        baseURL: process.env.OKTA,
    })
    return response
}

export async function AuthenticateApi() {

    const session_Token = await getSessionToken().then(function (res: AxiosResponse) {
        return res.data.sessionToken
    })
    const access_Token = await getAccessToken(session_Token).catch(function (error) {
        return error.request._currentUrl;
    })

    let token: string = access_Token
    let token1: string[] = token.split('access_token=');
    let token2: string[] = token1[1].split('&');
    let token3 = token2[0];

    return token3

}




































