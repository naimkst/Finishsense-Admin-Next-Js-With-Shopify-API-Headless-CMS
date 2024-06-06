"use client"
import React, { useState } from 'react';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Logo from '/public/images/login-logo.svg'
import Image from 'next/image';

const LoginPage = (props) => {

   const router = useRouter()

   const [value, setValue] = useState({
      email: 'user@gmail.com',
      password: '123456',
      remember: false,
   });

   const changeHandler = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
      validator.showMessages();
   };

   const [validator] = React.useState(new SimpleReactValidator({
      className: 'errorMessage'
   }));



   const submitForm = (e) => {
      e.preventDefault();
      if (validator.allValid()) {
         setValue({
            email: '',
            password: '',
            remember: false
         });
         validator.hideMessages();

         const userRegex = /^user+.*/gm;
         const email = value.email;

         if (email.match(userRegex)) {
            toast.success('Successfully Login on Finishsence !');
            router.push('/')
         }
      } else {
         validator.showMessages();
         toast.error('Empty field is not allowed!');
      }
   };
   return (
      <div>
         <div className="login-area separator-padding">
            <div className="container">
               <div className="contact-form-wrap">
                  <div className="heading-title">
                     <Image src={Logo} alt="" />
                  </div>
                  <form className="contact-form" onSubmit={submitForm}>
                     <div className="contact-wrap">
                        <div className="form-field">
                           <input type="email"
                              value={value.email}
                              variant="outlined"
                              name="email"
                              onChange={(e) => changeHandler(e)}
                              placeholder='Email Address'
                           />
                           {validator.message('email', value.email, 'required|email')}
                        </div>
                        <div className="form-field">
                           <input type="password"
                              value={value.password}
                              variant="outlined"
                              name="password"
                              onBlur={(e) => changeHandler(e)}
                              onChange={(e) => changeHandler(e)}
                              placeholder='Password'
                           />
                           {validator.message('password', value.password, 'required')}
                        </div>
                        <div className="form-field">
                           <button type="submit">Login Now</button>
                        </div>
                        <div className="form-field forgot">
                           <Link href="/">Forgot Password?</Link>
                        </div>
                        <div className="bottom-info">
                           <Link href="/">Don’t have an account? Register now</Link>
                           <p>By signing up, you are in agreement with our Terms & Conditions</p>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
};

export default LoginPage;