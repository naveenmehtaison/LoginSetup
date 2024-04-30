import { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import classes from './AuthForm.module.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading,setloading]= useState(false)
  const [alert,setalert] = useState(false)
  const [showlogin,Setshowlogin]=useState(false)

  async function submitHandler  (e) {
    if(!isLogin){
      try{e.preventDefault()
      const obj = {Email:e.target.email.value,
      Password:e.target.password.value}
      setloading(true)
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo',{
        email: obj.Email,
        password: obj.Password,
        returnSecureToken: true 
    })
      console.log(response.idToken)
      setloading(false)
      }
      catch{
        setalert(true)
        setloading(false)
      }
      
    }
    else{
      try {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
    
      
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDR5SSxYk2jPHpBjbYZNPoa76PPAmRPdo', {
            email: email,
            password: password,
            returnSecureToken: true 
        })
    

        console.log(response.data);
    
    } catch (error) {
        console.error('Error signing in:', error.response.data.error.message);
        setalert(true)
    }
    
    }
  };
  const switchAuthModeHandler=()=>{
    setIsLogin(!isLogin)
  }

  return (
    <>
    <Container style={{display:'flex',justifyContent:'center'}}>
      <Row className="justify-content-center">
        <Col md={6}>
          { (alert) && 
            <>
              <Alert style={{alignSelf:'center'}}>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  Data failed to execute
                </p>
                <Button variant="outline-danger" onClick={() => setalert(false)}>
                  Close
                </Button>
              </Alert>
            </>
          
          }
        </Col>
      </Row>
    </Container>

    <section className={classes.auth}>

      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {loading && <p style={{backgroundColor:'white'}}>Loading...</p>}
      <form onSubmit={submitHandler} >
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
          <button type='submit'>
            Submit Data
          </button>
          <button 
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
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
