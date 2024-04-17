import "./App.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {/* {
          isAuthenticated ? (<h2> Hello {user.name} </h2>) : ()
        } */}
        {isAuthenticated ? (
          <div>
          <h1> Hi there, {user.name}</h1>
          <button className="btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
          </div>
        ) :<LoginButton/>
        }
      </header>
    </div>
  );
}

export default App;