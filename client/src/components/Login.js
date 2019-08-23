import React, {useState} from "react";
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    credentials : {
      username: '',
      password: ''
    }
  })

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', user.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/protected')
      })
      .catch(err => console.log(err.response))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={user.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    </>
  );
};

export default Login;
