"use client";
import React, { useEffect, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "/public/images/login-logo.svg";
import Image from "next/image";
import Cookies from "js-cookie";

const LoginPage = (props) => {
  const router = useRouter();

  const [value, setValue] = useState({
    email: "user@gmail.com",
    password: "123456",
    remember: false,
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    console.log("submitForm", value);
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        password: "",
        remember: false,
      });
      validator.hideMessages();

      const email = value.email;
      const password = value.password;

      if (validateEmail(email)) {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
          Cookies.set("shopifyCustomerAccessToken", data.accessToken, {
            expires,
          });
          toast.success("Successfully Login on Finishsence !");
          router.push("/");
        } else {
          //  setError(data.errors.map((error) => error.message).join(", "));
          toast.error("Invalid email or password!");
        }
      }
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
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
                  <input
                    type="email"
                    value={value.email}
                    variant="outlined"
                    name="email"
                    onChange={(e) => changeHandler(e)}
                    placeholder="Email Address"
                  />
                  {validator.message("email", value.email, "required|email")}
                </div>
                <div className="form-field">
                  <input
                    type="password"
                    value={value.password}
                    variant="outlined"
                    name="password"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Password"
                  />
                  {validator.message("password", value.password, "required")}
                </div>
                <div className="form-field">
                  <button type="submit">Login Now</button>
                </div>
                <div className="form-field forgot">
                  <Link href="/">Forgot Password?</Link>
                </div>
                <div className="bottom-info">
                  <Link href="/">Don’t have an account? Register now</Link>
                  <p>
                    By signing up, you are in agreement with our Terms &
                    Conditions
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
