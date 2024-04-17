import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
     <h1>Hola amigos, please login</h1>
     <button onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  )
  
};

export default LoginButton;           