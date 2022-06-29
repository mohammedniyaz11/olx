import React ,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  Sighup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from'./store/Context'
import Create from './Pages/Create'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(() => {
     firebase.auth().onAuthStateChanged((user)=>{
       setUser(user)
     })
  
   
  })
  
  return (
    <div>
      
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/sighup'>
        <Sighup />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
       <Route path='/create'>
         <Create/>
       </Route>
       <Route path='/viewpost'>
       <View/>
       </Route>
     
      </Router>
    </div>
  );
}

export default App;
