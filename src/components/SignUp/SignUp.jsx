import './SignUp.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp({ setUser, setModalMessage }) {
  const navigate = useNavigate();
  function createNewUserOnServer(user) {
    fetch('https://power-glossy-rocket.glitch.me/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }
  function signUp(e) {
    e.preventDefault();
    const formEl = e.target;
    const user = {
      id: formEl.email.value,
      password: formEl.password.value,
      firstName: formEl.firstName.value,
      lastName: formEl.lastName.value,
      address: formEl.address.value,
      cart: []
    };
    formEl.reset();
    fetch(`https://power-glossy-rocket.glitch.me/users/${user.id}`).then(
      (resp) => {
        if (!resp.ok) {
          navigate('/');
          setModalMessage('welcome');
          setUser(user);
          createNewUserOnServer(user);
        } else {
          setModalMessage('This email already exists');
        }
      }
    );
  }
  return (
    <div className='sign-up'>
      <h2>Sign Up</h2>
      <form onSubmit={signUp}>
        <TextField
          name='firstName'
          type='text'
          label='FIRST NAME'
          variant='outlined'
          required
        />
        <TextField
          name='lastName'
          type='text'
          label='LAST NAME'
          variant='outlined'
          required
        />
        <TextField
          name='address'
          type='text'
          label='ADDRESS'
          variant='outlined'
          required
        />
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
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
