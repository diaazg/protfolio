import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import deberli from "../../Assets/Projects/deberli.png";
import sa7ti from "../../Assets/Projects/sa7ti.png";
import suicide from "../../Assets/Projects/suicide.png";
import UniSecure from "../../Assets/Projects/UniSecure.png";

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
              imgPath={sa7ti}
              isBlog={false}
              title="SA7TI"
              description="Sa7ti is medical mobile applications that help patient to make appointments with doctor , display nearest doctors by wilaya and commune and current location , medicines reminder ... "
              ghLink="https://github.com/diaazg/sahti.git"
              demoLink="https://www.figma.com/file/6vunkH1XvxArhyEF7fucGW/app-desine?type=design&node-id=1268-519&mode=design&t=ipfnX99AKQOlYJMn-0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UniSecure}
              isBlog={false}
              title="UniSecure"
              description="UniSecure is an application which I made it in competition of 4 hours , it is check the validity of someone to let him enter to the university or residence"
              ghLink="https://github.com/diaazg/unisecure.git"
              demoLink="https://www.figma.com/file/gzTDXMsXO3qPmX5AHDSVGh/Laghouat?type=design&node-id=15-1500&mode=design&t=qqrzWNVpkldJkOzp-0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deberli}
              isBlog={false}
              title="Deberli"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/diaazg/deberli"
              demoLink="https://www.figma.com/file/6E6W6SBdedg2wgrTQD6Y6r/swo?type=design&node-id=1-4&mode=design&t=U4WWZDDUN5vmRjs2-0"              
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
