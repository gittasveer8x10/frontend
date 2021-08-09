import React from 'react'
import { Form,Button,Row,Col,Container,Image} from 'react-bootstrap'
import login from '../images/login.png'
import '../css/RegisterScreen.css'
import google from '../images/google.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import call from '../images/call.png'
import key from '../images/key.png'
import padlock from '../images/padlock.png'
import user from '../images/user.png'
import email from '../images/email.png'

function RegisterScreen() {
    return (
    <div id="login-box">

        <div class="left">
          <h1>Register</h1>
          <hr/>
          <div class="box-2">
            <img class="social_sites2" src={user} alt="user" width="13px" height="13px"/>
            <input type="text" name="username" placeholder="*Full Name" />
          </div>

          <div class="box-2"> 
            <img class="social_sites2" src={call} alt="call" width="13px" height="13px"/>
            <input type="text" name="contact" placeholder="*Contact Number" />
          </div>

          <div class="box-2">
            <img class="social_sites2" src={email} alt="email" width="13px" height="13px"/>
            <input type="text" name="email" placeholder="*Email" />
          </div>

          <div class="box-2">
            <img class="social_sites2" src={key} alt="key" width="13px" height="13px"/>
             <input type="password" name="password1" placeholder="*Create Password" />
          </div>

          <div class="box-2">
            <img class="social_sites2" src={padlock} alt="padlock" width="13px" height="13px"/>
            <input type="password" name="password2" placeholder="*Confirm password" />
          </div>
          
          <input type="submit" name="signup_submit" value="Register" />

          <div class="login-bottom">Already have an account?<a href='/login'>Login</a></div>
          <div class="login-bottom">Or Login with
          <img class="social_sites" src={google} alt="google" width="13px" height="13px"/>
          <img class="social_sites" src={facebook} alt="facebook" width="13px" height="13px"/>
          <img class="social_sites" src={linkedin} alt="linkedin" width="13px" height="13px"/>
          </div>
        </div>

        <div class="right"></div>

    </div>
        
    )
}

export default RegisterScreen