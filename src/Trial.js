import React from 'react'
import {Button} from '@geist-ui/react';
import './Trial.css'
function Trial(props) {
 
  let firstday=props.day
let dayfinal=firstday.substring(0,10)
    return (
        <div>
        <meta charSet="UTF-8" />
        <title />
        <link rel="stylesheet" href="style.css" />
        <div className="container" id =  "res">
          <header>
            
            <h1 id="name">{props.peru}</h1>
            <img height="150" width="150" src={props.photo} />
            <div id="designation">
              <span className="title">{props.bio}</span>
              <span className="organization"></span>
             
            </div>
            <div id= "profilelink"><a href={props.link}>Github</a></div>
            <div>
              <h3>Languages Known :</h3> 
              {props.languages.map((lang)=>{return <h5>{lang}</h5>})}
              
            </div>
            <div className="contact">
              <div className="email"></div>
            </div>
          </header>
          <div className="content" role="main">
            <section id="objective">
              <h4 className="title">Contributing since: {dayfinal}</h4>
             {props.blog?<div className="description">
                <a href={props.blog}>Personal Website</a>		
              </div>:""}  {/* end description */}
            </section>
            <section id="Education">
              <h2 className="title">Github Stats</h2>
              <div className="description">
                <table>
                  <thead>
                    <tr><td>Followers</td>
                      <td>Following</td>
                      <td>Repos</td>
                     
                    </tr></thead>
                  {/* edit this/ row-wise*/}
                  <tbody><tr>
                      <td>{props.followers}</td>
                      <td>{props.following}</td>
                      <td>{props.reponumber}</td>
                  
                    </tr>
                    					
                  </tbody></table>
              </div> {/* end description */}
            </section>
   {/* add the project listing here*/} 
             <section id="projects">
              <h2 className="maintitle">Projects Undertaken</h2>
              <div className="description">
                {props.repos.map((repo)=>{return(
                  <section className="project">
                  <h3 className="title">{repo.repo_name}</h3>
                  <div className="meta">
                    <span className="field">Project Field</span> <span className="date">Aug 2010 - Nov2010</span>
                  </div>
                  <p className="description">{repo.repo_description}</p>
                  <p><a href={repo.repo_url}>Link</a></p>
                </section> 

                )})}	
              </div> {/* end description */}
            </section>	
            <Button onClick={window.print} type="success-light" id = "printButton">Download Resume</Button>
    
              	
              	
            {/* Training/ seminars */}
            {/* Scholistics Achievements */}
            {/* Technical Skills */}
            {/* Extra-Curricular Activities */}
            {/* Personal Informations */}
            {/* References */}
            {/* Declarations */}
            {/* signatory */}
          </div> {/* end main content */}
        </div> {/* end container */}
        
      </div>
    )
}

export default Trial