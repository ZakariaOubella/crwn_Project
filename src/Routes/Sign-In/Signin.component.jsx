import React from 'react'
import {
  signInWithGoogle,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util"; 

export default function Signin() {
  const logGoogleUser = async () =>{
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  }
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign In With Google PopUp</button>
    </div>
  );
}
