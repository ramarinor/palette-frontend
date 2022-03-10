import './SignIn.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function SignIn({ setUser, setModalMessage }) {
  const navigate = useNavigate();
  function signIn(username, password) {
    fetch(`https://power-glossy-rocket.glitch.me/users/${username}`)
      .then((resp) => resp.json())
      .then((user) => {
        if (user.password === password) {
          navigate('/');
          setUser(user);
          setModalMessage('Welcome');
        } else {
          setModalMessage('Wrong username/password. Please try again.');
        }
      });
  }
  return (
    <div className='sign-in'>
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formEl = e.target;
          //@ts-ignore
          signIn(formEl.email.value, formEl.password.value);
        }}
      >
        <TextField
          name='email'
          type='email'
          label='EMAIL ADDRESS'
          variant='outlined'
          required
        />
        <TextField
          name='password'
          type='password'
          label='PASSWORD'
          variant='outlined'
          required
        />
        <Button type='submit' variant='contained'>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
