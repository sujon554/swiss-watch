import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initalizeAuthentication = () => {
    initializeApp(firebaseConfig);


}

export default initalizeAuthentication;