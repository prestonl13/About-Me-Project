import React from 'react';
import './Introduction.css';

export function Introduction() {
  return (
    <div class="container center">
      <div class="column textbox">
         <h1 class="text">
            Who I Am:
         </h1>
         <p class = "textsize">
            Hello! My name is Preston and I am a junior at Bayside High School. I am in the Computer Programming and Web Design Program here at Bayside, and I am currently working on Java and SQL in my classes. I am not sure what I want to do in the future for my major, but I am interested in computer science and engineering. I hope to get along with everyone during this internship and work hard to improve my skills.
         </p>
      </div>
        <div class="column textbox">
          <h1 class="text">
             Hobbies & Interests
          </h1>
          <p class = "para">
             Some hobbies and interests of mine include: <br />
             • Video Games - Mostly competitive FPS games <br />
             • Reading - As a self goal, I am trying to read more books <br />
             • Boy Scouts - I am a Boy Scout and I have been in the program for around 10 years now <br />
            </p>
        </div>
      </div>
  );
}
