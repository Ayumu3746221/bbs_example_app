import { error } from "console";
import { provider } from "./firebaseConfig";
import { signInWithEmailAndPassword , signOut, User , getIdToken} from "firebase/auth";

interface loginProps {
    email:string,
    password:string
}


const loginMethod = async ({email ,password }:loginProps) => {

    try {
        const userCredentail= await signInWithEmailAndPassword(provider , email , password);
        const user:User = userCredentail.user;
        return user
    } catch (error) {
        console.error("Login Error:", error);
        return null
    }
}

const signOutMethod = async () => {

    try {
        signOut(provider);
    } catch (error) {
        console.error("Logout Error" , error);
    }
}

const getToken = (user:User) => {
    user.getIdToken().then((token) => {
        return token;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Program missed taking IdToken", errorCode , errorMessage);
    })
}


export {loginMethod , signOutMethod , getToken} ;