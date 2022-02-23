  
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Loading from '../components/Loading';
import MessageBox from '../components/Message';
import { SigninPageStyle } from '../components/styles/SigninPage';

export default function RegsiterPage(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <SigninPageStyle>
      <h1>Create Account</h1>

      <form className="form" onSubmit={submitHandler}>

        {loading && <Loading></Loading>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
       
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          ></input>
        
    
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className='form-input'
          ></input>
     
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className='form-input'
          ></input>
  

          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='form-input'
          ></input>
    
       
          <button className="form-submit" type="submit">
            Register
          </button>
        
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`} className="link-out">Sign-In</Link>
          
      </form>
    </SigninPageStyle>
  );
}