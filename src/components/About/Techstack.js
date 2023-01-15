import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h1>HTML</h1>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>CSS</h1>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>JavaScript</h1>
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h1>React JS</h1>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>R Native</h1>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>Bootstrap</h1>
        <DiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h1>Next JS</h1>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>Git</h1>
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
