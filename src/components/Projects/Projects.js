import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CRUD from "../../Assets/Projects/CRUD.png";
import emotion from "../../Assets/Projects/emotion.png";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import movieapp from "../../Assets/Projects/movieapp.jpg";

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
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Ecommerce website for selling different products, created by react js and redux toolkit with backend online fake server dummy json "
              ghLink="https://github.com/bassameladly/react_redux_toolkit_ecommerce"
              demoLink="https://react-redux-toolkit-ecommerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie Search App"
              description="Movie search app for searching on your favourite movie, created by react js, bootstrap redux toolkit with movies API "
              ghLink="https://github.com/bassameladly/react_movie_search_app"
              demoLink="https://react-movie-search-app-ivory.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Weather country search app to search for any country weather now , created by react js with weather API"
              ghLink="https://github.com/bassameladly/react_js_weather_app"
              demoLink="https://react-js-weather-app-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="React Redux toolkit CRUD App"
              description="CRUD App for create, delete, fetch and update posts, created by React js and reduxtoolkit with json-server API"
              ghLink="https://github.com/bassameladly/React-redux-CRUD-app.git"
              demoLink="https://react-redux-crud-app-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
