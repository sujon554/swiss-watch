import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initalizeAuthentication from "../pages/Login/Login/Firebase/firebase.init";
// import { useHistory, useLocation } from "react-router-dom";

initalizeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  // const location = useLocation();
  // const history = useHistory();
  // const redirect_uri = location.state?.from || "/dashboard";

  const registerWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {});
  };

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // history.push(redirect_uri);
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to the database
        saveUser(email, name, "POST");
        //update Profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  // save users to mongoDB
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://ancient-citadel-32341.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`https://ancient-citadel-32341.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    logOut,
    authError,
    isLoading,
    registerUser,
    logInUser,
    registerWithEmail,
    signInUsingGoogle,
  };
};

export default useFirebase;
