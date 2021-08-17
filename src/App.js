import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'; 
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user logged in
        dispatch(
          login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
           photoUrl: userAuth.photoURL,
        }));
      }else{
        //user logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {user ?
      (<Login />) : 
      (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}


      
    </div>
  );
}

export default App;
