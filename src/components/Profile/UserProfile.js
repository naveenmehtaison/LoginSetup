import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import DataContext from '../../Store/auth-context';
import { useContext } from 'react';


const UserProfile = () => {
  const Ctx = useContext(DataContext)
  
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
