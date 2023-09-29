import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./App.css";
import app from "../firebase.init";
import { useState } from "react";

function App() {
  const [users, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const provider1 = new GithubAuthProvider();
  const [loggedInUser, setLoggedInUser] = useState(true);

  const handleGitLogin = () => {
    signInWithPopup(auth, provider1)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <div>
        {!users.displayName ? (
          <>
            <button onClick={handleLogin}>Google Log In</button>
            <button onClick={handleGitLogin}>GitHub Login</button>
          </>
        ) : (
          <button onClick={handleSignout}>Sign Out</button>
        )}

        <p>{users.displayName}</p>
        <p>{users.email}</p>
        <img src={users?.photoURL} alt="" />
      </div>

      <div>
        {loggedInUser ? <button>LogOut</button> : <button>Login</button>}
      </div>
    </>
  );
}

export default App;
