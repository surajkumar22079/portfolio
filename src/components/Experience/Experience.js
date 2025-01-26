import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import BetterSoftwareBanner from "../../Assets/Projects/BetterSoftware.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my previous professional experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ExperienceCard
              imgPath={BetterSoftwareBanner}
              isBlog={false}
              companyName="Better Software (formerly Jalan Technologies)"
              Designation="Software Engineer (July 2024 - Present)"
              description={
                <>
                  <ul>
                    <li>
                      Built a <strong>to-do list application</strong> using the
                      MERN stack during the training period, implementing CRUD
                      operations and user interaction features.
                    </li>
                    <li>
                      Worked on <strong>“Sunlead”</strong>, a solar quotation
                      tool that generates customized solar installation
                      proposals for U.S. residential houses:
                      <ul>
                        <li>
                          Integrated the <strong>Google Solar API</strong> to
                          fetch rooftop details and center coordinates of solar
                          panels.
                        </li>
                        <li>
                          Designed mathematical calculations to determine the
                          edges of solar panels.
                        </li>
                        <li>
                          Rendered accurate rooftop solar panel layouts using{" "}
                          <strong>React Leaflet’s Polygon component</strong>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Enhanced the <strong>SEO of the company’s website</strong>{" "}
                      by improving page performance, meta tags, and overall
                      structure to boost search engine rankings.
                    </li>
                    <li>
                      Added a feature in "Sunlead" using{" "}
                      <strong>VAPI</strong> to integrate an AI assistant for
                      user interaction:
                      <ul>
                        <li>
                          Designed and implemented{" "}
                          <strong>RESTful CRUD APIs</strong> for backend
                          communication with the assistant.
                        </li>
                        <li>
                          Displayed real-time AI conversations on the frontend.
                        </li>
                        <li>
                          Automated appointment bookings and integrated{" "}
                          <strong>Twilio SMS</strong> functionality for booking
                          confirmations.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <strong>Tech Stack:</strong> ReactJS, MongoDB, ExpressJS,
                    NodeJS, TypeScript, JavaScript, tsx, jsx, BlandAI, VAPI.
                  </p>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
