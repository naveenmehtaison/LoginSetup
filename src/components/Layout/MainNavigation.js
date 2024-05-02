import { Link, Router,Routes, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import DataContext from '../../Store/auth-context';
import { Route } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage';
import React from 'react'
import { Redirect } from 'react-router-dom';

const MainNavigation = () => {
  const Navigate = useNavigate()

  const Ctx = useContext(DataContext)
  const handlelogout=()=>{
    console.log(Ctx.Tokenarr)
    Ctx.removeToken(Ctx.Token)
    console.log(Ctx.Tokenarr)
    Ctx.loginfunc()
    localStorage.removeItem('token')
    Navigate('/auth')
    
    

  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            {!Ctx.islogin && <button onClick={handlelogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
