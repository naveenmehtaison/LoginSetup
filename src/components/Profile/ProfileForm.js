import classes from './ProfileForm.module.css';
import DataContext from '../../Store/auth-context';
import { useContext } from 'react';
import axios from 'axios';


const ProfileForm = () => {
  const Ctx = useContext(DataContext)
  async function handleChangepass(e){
    e.preventDefault()
    try{
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo',{
        idToken:Ctx.Token,
        password:e.target.password.value,
        returnSecureToken: true 
      })}
    catch{
      console.log('error cnanot change password')
    }


  }
  return (
    <form onSubmit={handleChangepass} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='password'>New Password</label>
        <input type='password' id='password' />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
