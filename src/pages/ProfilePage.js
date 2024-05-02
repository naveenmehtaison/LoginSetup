import UserProfile from '../components/profile/user-profile';
import DataContext  from '../Store/auth-context';
import { useContext } from 'react';
const ProfilePage = () => {
  const Ctx = useContext(DataContext)
  console.log(Ctx)
  return <UserProfile />;
};

export default ProfilePage;
