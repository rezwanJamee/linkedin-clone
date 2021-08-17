import React, { useState } from 'react';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = () => {
        e.preventDefault();
        
    };
    const register = () => {
        if(!name){
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic, 
                }))
            });
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <h1>Please Log in</h1>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lROVks" alt="" />

            <form>
                <input placeholder="Full name (required if registering)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" />

                <input placeholder="Profile pic url (optional)"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                type="text" />

                <input placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" />  

                <input placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" />

                <button type='submit' onClick={loginToApp}>Sign In</button>
                
            </form>

            <p>Not a member? {" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
