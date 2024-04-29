import { useState, useRef } from 'react';
import { unstable_usePrompt } from 'react-router-dom';
import classes from './AuthForm.module.css';
import axios from 'axios';
import {Prompt} from 'react-router-dom'
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading,setloading]= useState(true)

  async function switchAuthModeHandler  (e) {
      try{e.preventDefault()
      const obj = {Email:e.target.email.value,
      Password:e.target.password.value}
      console.log(obj,'hello')
      setloading(true)
      const response = await axios.post('https://crudcrud.com/api/63011833486a40338090ccc2b46be0e6/login',obj)
      setloading(false)
      setIsLogin((prevState) => !prevState)
      }
      catch{
        setloading(false)
      }
  };

  return (
    <>
    <section className={classes.auth}>
    <Prompt when={!loading} message={(location)=>'err found'}/>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {loading && <p style={{backgroundColor:'white'}}>Loading...</p>}
      <form onSubmit={switchAuthModeHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
          <button 
            type='submit'
            className={classes.toggle}
            // onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}Submit
          </button>
        </div>
      </form>
    </section>
    </>
  );
};

export default AuthForm;
