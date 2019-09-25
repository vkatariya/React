import React from 'react';
import '../css/contact.css';
import {Link} from  'react-router-dom';

const Contact = () =>{
    return (
        <div className="ContactStyle">
        <h1>Welcome To Contact us </h1>
      
        <div className="Contact-form-Style">
        <main className="pa2 ma2 black-80 "/>
        <form className="measure center"/>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            <label className="pa0 ma2 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
          </fieldset>
          <div className="">
            <input className="b ph3  pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <Link href="#0" className="f6 link dim black db">Sign up</Link>
            <Link href="#0" className="f6 link dim black db" >Forgot your password </Link>
          </div>
          <form/>
          <main/>
          </div>
      



    </div>
    )
}
export default Contact;