import React from 'react';
import './Projects.css';
export function Projects() {
  return (
    <div>
      <div class="container column textbox" style = "height: 600px; flex-wrap: wrap; align-content: space-evenly;">
         <h1 class="text center">
            Previous Projects
         </h1>
        <div class="container row center">  
            <div class = "imagebox ">
              <a href="https://replit.com/@PRESTONLIAO1/project-2?v=1"/>
              <img src="pong.png" class = "image" />
            </div>
            <div class = "imagebox ">
              <a href="https://github.com/prestonl13/Encryption-Project/tree/main"/>
              <img src="encryption gif.gif" class = "image" />
            </div>
            <div class = "imagebox ">
              <a href="https://replit.com/@PRESTONLIAO1/project-css-and-html?v=1"/>
              <img src="hongkong.png" class = "image" />
            </div>
        </div>
       </div>
    </div>
  );
}
