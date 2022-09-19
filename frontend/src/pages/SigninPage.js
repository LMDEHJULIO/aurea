import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import Loading from "../components/Loading";
import MessageBox from "../components/Message";
import { SigninPageStyle } from "../components/styles/SigninPage";

export default function SigninPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <SigninPageStyle>
      <h1>Sign In</h1>

      <form className="form" onSubmit={submitHandler}>
        {loading && <Loading></Loading>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        {/* <label htmlFor="email">Email address</label> */}
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        ></input>

        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        ></input>

        <label />

        <button className="form-submit" type="submit">
          Sign In
        </button>

        <div>
          <div>
            New customer?{" "}
            <Link to={`/register?redirect=${redirect}`} className="link-out">
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </SigninPageStyle>
  );
}
