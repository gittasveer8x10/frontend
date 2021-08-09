import React from 'react'

import '../css/LoginScreen.css'
import google from '../images/google.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'

import key from '../images/key.png'

import user from '../images/user.png'


export const LoginScreen = () => {
    return (
        <div id="login-box">

            <div class="right">
                <h1>Log In</h1>
                <hr />
                <div class="box-2">
                    <img class="social_sites2" src={user} alt="user" width="13px" height="13px" />
                    <input type="text" name="username" placeholder="*Username" />
                </div>
                <div class="box-2">
                    <img class="social_sites2" src={key} alt="key" width="13px" height="13px" />
                    <input type="password" name="password1" placeholder="*Password" />

                </div>

                <div class="fp"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div>
                <br />


                <input type="submit" name="signup_submit" value="Log In" />
                <br />
                <div class="login-bottom">Don't have account?<a href='/login'>Create one</a></div>

                <div class="login-bottom">Or Login with
                    <img class="social_sites" src={google} alt="google" width="13px" height="13px" />
                    <img class="social_sites" src={facebook} alt="facebook" width="13px" height="13px" />
                    <img class="social_sites" src={linkedin} alt="linkedin" width="13px" height="13px" />
               
                </div>
            </div>

                    <div class="left"></div>

                </div>

                )
}