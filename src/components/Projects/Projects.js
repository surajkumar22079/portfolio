import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sunlead from "../../Assets/Projects/sunlead.png"
import VirtualLab from "../../Assets/Projects/virtual-lab.png"
import neuralNetwork from "../../Assets/Projects/neural-network.jpeg"
import eCommerce from "../../Assets/Projects/e-commerce.png"
import todoImage from "../../Assets/Projects/todo-image.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunlead}
              isBlog={false}
              title="Sunlead"
              description="Built a feature to visualize rooftop solar panels using the Google Solar API and react-leaflet, rendering accurate panel layouts with the Polygon component. Improved the accuracy of quotation tool using google solar API. Integrated VAPI, an AI assistant, into the frontend to facilitate user interaction and data collection. Designed and implemented RESTful CRUD APIs to enable seamless communication between the AI assistant and the backend server. Enabled VAPI to guide users through proposal reviews and appointment scheduling. Integrated Twilio for automated SMS notifications. Wrote automated test cases to ensure reliable API functionality"
              demoLink="https://iitracin-my.sharepoint.com/:v:/g/personal/suraj_k_ee_iitr_ac_in/EafEUeGwcS5PvSgcMOlVN98B9X-RwdPabBiwUfiyfct-5g?e=DVIVGF"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VirtualLab}
              isBlog={false}
              title="Development of Experiments in virtual lab"
              description="This project is a virtual laboratory platform for conducting electrical instrumentation experiments, developed using ReactJS for the frontend, Syncfusion for interactive circuit drawing, and ChartJS and D3.js for data visualization. It enables users to perform experiments in a virtual environment by entering data into the platform, which then computes and visualizes the results through dynamic charts, graphs, and tables. The platform replicates real-world instrumentation scenarios and supports experiments. By offering an interactive and cost-effective alternative to physical setups, this project enhances practical learning experiences, making complex instrumentation concepts accessible and engaging for students."
              ghLink="https://github.com/surajkumar22079/B_Tech_Project_2023_24"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="E-Commerce Website using MERN stack"
              description="I built a full-stack e-commerce website using the MERN stack (MongoDB, Express, React, and Node.js), featuring a dynamic front-end with product listings, a shopping cart, and responsive design. The backend includes secure RESTful APIs for authentication, product management, and cart operations, with data stored in MongoDB. I also developed an admin panel for managing products. This project demonstrates my skills in creating scalable and user-friendly web applications with modern technologies."
              ghLink="https://github.com/surajkumar22079/E_Commerce_Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoImage}
              isBlog={false}
              title="Todo list using MERN stack"
              description="The Todo App is a streamlined task management application designed to enhance productivity and organization. It features robust user authentication using JWT, enabling secure sign-up and sign-in functionality. The app allows users to efficiently manage their tasks by adding, updating, deleting, and marking tasks as completed or uncompleted. With flexible filtering options, users can easily sort tasks by type—such as official, personal, or hobby or by their completion status. Built with a modern tech stack including Node.js, Express, and MongoDB for the backend and a dynamic frontend using HTML, CSS, and JavaScript, the Todo App combines simplicity with functionality to provide an intuitive user experience."
              ghLink = "https://github.com/surajkumar22079/todo-list"
              demoLink = "https://iitracin-my.sharepoint.com/:v:/g/personal/suraj_k_ee_iitr_ac_in/EdI9oaJTKOJLsmzVsxGXVBEBsGP7--_-7G3ydoeZIHUiaA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=pBnvHQ"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuralNetwork}
              isBlog={false}
              title="Neural network-based model to predict flexible needle deflection"
              description="This project models needle deflection during insertion into soft tissue using the Euler-Bernoulli Beam Theorem to represent the needle as a cantilever beam under distributed load. An adaptive quasi-static mechanism adjusts the load distribution as insertion progresses. A Multi-Layer Perceptron (MLP) was used to quantify the tissue-needle interaction, with experiments in wax gel validating the model's performance. This work combines theoretical modeling with machine learning, offering advancements in precision for medical needle procedures."
              Link="https://ieeexplore.ieee.org/abstract/document/10744706"             
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
