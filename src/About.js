import React from "react";
import Projects from "./Projects"; // Import the Projects component
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* About Section */}
      <div id="about-me" className="about-content">
        <h1 className="about-title">Lwam Zeche</h1>
        <div className="about-text">
          <p>
            Hey there! My name is Lwam Zemikael Araya. I am an undergraduate
            student at KAIST, majoring in Computer Science with a minor in Brain
            and Cognitive Sciences. I graduated from Kallamino Special High
            School and am also an Addis Coder 2019 alum. I enjoy rewatching the
            TV show Friends and listening to spoken word poetry. :)
          </p>

          <p>
            My research interests lie in Human-Computer Interaction (HCI),
            Wearable devices, Haptics, and Neuroscience (NeuroHCI). I am
            particularly passionate about creating technologies that empower
            physicians and enhance medical care, such as devices for early
            disease detection and immersive medical training.
          </p>
          <p>
            Recently, I am doing a research internship at{" "}
            <a
              href="https://make.kaist.ac.kr/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAIST Make Lab
            </a>
            , under the guidance of Professor{" "}
            <a
              href="https://make.kaist.ac.kr/andrea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrea Bianchi
            </a>
            . I am looking for PhD programs for Fall 2025.
          </p>
          <a
            href="https://drive.google.com/file/d/18KPimD9wZ1QCPlOfkYX5vV38qcx0e9Yu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Please find my CV here
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects-section">
        <h1 className="projects-title">My Projects</h1> {/* Add the title */}
        <Projects />
      </div>
    </div>
  );
}

export default About;
