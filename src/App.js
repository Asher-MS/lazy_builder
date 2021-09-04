import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setName] = useState(null);
  let [bio, setBio] = useState(null);
  let [avatar, setAvatar] = useState(null);
  let [currentUser, setcurrentUser] = useState(null);
  let [isthere, istherefunction] = useState(false)
  let [userRepos,setUserRepos]=useState([]);
  let userLocation="";
  let [userLanguages,setUserLanguages]=useState(["English"])
  let [followers, setFollowers] = useState(0)
  let [following, setFollowing] = useState(0)
  let [reponumber, setrepos] = useState(0)
  let [day,setday] = useState('')
  let [blog,setblog] = useState()

  return (
   <div>testt</div> 
  );
}

export default App;
