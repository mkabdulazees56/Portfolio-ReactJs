import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "WordPress" ? (
            <ToggleButton
              active
              value="WordPress"
              onClick={() => setToggle("WordPress")}
            >
              WORD PRESS'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="WordPress"
              onClick={() => setToggle("WordPress")}
            >
              WORD PRESS'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "JavaScript" ? (
            <ToggleButton
              active
              value="JavaScript"
              onClick={() => setToggle("JavaScript")}
            >
              JAVA SCRIPT'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="JavaScript"
              onClick={() => setToggle("JavaScript")}
            >
              JAVA SCRIPT'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "ReactJs" ? (
            <ToggleButton
              active
              value="ReactJs"
              onClick={() => setToggle("ReactJs")}
            >
              REACT JS'S
            </ToggleButton>
          ) : (
            <ToggleButton value="ReactJs" onClick={() => setToggle("ReactJs")}>
              REACT JS'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Mern" ? (
            <ToggleButton active value="Mern" onClick={() => setToggle("Mern")}>
              MERN STACK'S
            </ToggleButton>
          ) : (
            <ToggleButton value="Mern" onClick={() => setToggle("Mern")}>
              MERN STACK'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Flutter" ? (
            <ToggleButton active value="Flutter" onClick={() => setToggle("Flutter")}>
              Flutter APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="Flutter" onClick={() => setToggle("Flutter")}>
              Flutter APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

