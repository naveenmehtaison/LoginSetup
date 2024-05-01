// import { Switch, Route } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Context from './Store/Context';

function App() {
  return (
    <Context>
      <Layout>
        <Routes>
          <Route path='/' element={
            <HomePage />}/>
          <Route path='/auth'
            element={<AuthPage />}/>
          <Route path='/profile'
            element={<UserProfile />}/>
        </Routes>
      </Layout>
    </Context>
  );
}

export default App;
