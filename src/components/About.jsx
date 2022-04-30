import React from "react";
import "./About.css";
import john from "./images/john-doe.png";

const About = () => {
 
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-1">
          <img src={john} alt="john" />
        </div>

        <div className="col-2">
          <h2>about</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            possimus tenetur ab illum eligendi libero error nulla perferendis
            expedita reprehenderit
          </p>
          <p>
            Sahil ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            excepturi quia quod velit ratione aspernatur! Laudantium consectetur
            corporis inventore aliquid omnis, architecto iusto. Corporis impedit
            cupiditate magni quos dicta dolorem.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
