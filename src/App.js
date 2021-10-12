import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Card, Grid } from '@geist-ui/react';
import { Spacer } from '@geist-ui/react';
import { Input } from '@geist-ui/react';
import Trial from './Trial';
import { Text, Link, Image, Button,Textarea } from '@geist-ui/react';
const { Octokit } = require('@octokit/rest');

function App() {
  let [name, setName] = useState(null);
  let [bio, setBio] = useState(null);
  let [avatar, setAvatar] = useState(null);
  let [currentUser, setcurrentUser] = useState(null);
  let [currentUserLink, setcurrentUserLINK] = useState(null);
  let [isthere, istherefunction] = useState(false);
  let [userRepos,setUserRepos]=useState([]);
  let userLocation="";
  let [userLanguages,setUserLanguages]=useState(["English"]);
  let [followers, setFollowers] = useState(0);
  let [following, setFollowing] = useState(0);
  let [reponumber, setrepos] = useState(0);
  let [day,setday] = useState('');
  let [blog,setblog] = useState();
  let [isError,setIsError]=useState(false);


  const octokit = new Octokit({
    auth: process.env.REACT_APP_PAT,

  });//Created a new octokit Object and authorized it using github PAT 

  const handleClick = function () {

    octokit.rest.users.getByUsername({
      username: currentUser,
    }).then((res) => {
      istherefunction(true);
      setName(res.data["name"]);
      setBio(res.data["bio"]);
      setAvatar(res.data["avatar_url"]);
      setFollowers(res.data["followers"]);
      setFollowing(res.data["following"]);
      setrepos(res.data["public_repos"]);
      setday(res.data["created_at"]);
      setblog(res.data["blog"]);
      userLocation=res.data["location"];
      console.log(res.data["location"]);    
      languageFinder(userLocation);
      
    }).catch((error)=>{console.log(error);setIsError(true)});//handle the Button Click and get the user data from the github API using the currentusername


    octokit.rest.repos.listForUser({
      username:currentUser,
    }).then((res)=>{
     
      res.data.forEach((repo)=>{
        
        let temp_repo={
          repo_name:repo.name,
          repo_description:repo.description,
          repo_url:repo.html_url,
          repo_starcount:repo.stargazers_count,

        }
        setUserRepos(userRepos=>[...userRepos,temp_repo]);
        
      })    
    })// Fetch the data of the repositories of the user and store it in an Array of Javascript objects
  }
  const languageFinder=function(userLocation){
    console.log(userLocation);
    if(userLocation.search("kerala")==0 || userLocation.search("Kerala")==0){
      console.log("Kerala Found");
      setUserLanguages(userLanguages=>[...userLanguages,"Malayalam"]);
      
      
    }else{
      console.log("Kerala Not Found");
      
    }

  }

  return (
    <div className="App">
    {isthere ? <div>
     <Trial day={day} blog={blog} reponumber={reponumber} followers={followers} following={following} bio={bio} link ={currentUserLink} peru={name} photo={avatar} repos={userRepos} location={userLocation} languages={userLanguages}/>
    </div> :<div>
      <div className="titleahne">
        
      <Text h1>  <Spacer h={2} />
        We Are As Lazy as You </Text>
        </div>
      <div className="inputbar">
 
        <Input  onChange={(e) => { setcurrentUser(e.target.value); setcurrentUserLINK("https://github.com/"+e.target.value); }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter'){
                    handleClick();
                  }    
                }}/>
        <Button  shadow type="secondary" auto scale={0.35} onClick={() => {
          
          handleClick()
        }}>generate</Button> 
        <br/>
        <Spacer y={3}/>
        {isError?<Textarea type="error" height="65px" value="NO Such User" />:<h1></h1>}
        </div>
        
        </div> 
      }
      
   
      <Grid.Container gap={2} height="100px">

      </Grid.Container>
  </div>
  );
}

export default App;
