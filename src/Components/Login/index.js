import { TextInput, Button, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth/Auth";
import { When } from 'react-if';

const Login = () => {
  const {
    login,
    logout,
    loggedIn,
    user,
  } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const loginHandler = () => {
    login(username, password);
  }

  const logoutHandler = () => {
    logout();
  }

  return (
    <>
      <TextInput
        placeholder="Username"
        label="Username"
        onChange={usernameHandler}
      />
      <TextInput
        placeholder="Password"
        label="Password"
        onChange={passwordHandler}
      />
      <When condition={loggedIn}>
        <Button type="button" onClick={logoutHandler}>
          Logout
        </Button>
        <Text>user: {JSON.stringify(user)}</Text>
      </When>
      <When condition={!loggedIn}>
        <Button type="button" onClick={loginHandler}>
          Login
        </Button>
      </When>
    </>
  )
}

export default Login;