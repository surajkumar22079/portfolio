import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suraj Kumar </span>
            from <span className="purple"> Sitarganj, India.</span>
            <br />
            I am a Software Engineer by profession.
            <br />
            I have completed Bachelor of Technology(BTech) from <span className="purple">IIT Roorkee</span> in Electrical Engineering.
            <br />
            <br />
            Apart from programming and development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
