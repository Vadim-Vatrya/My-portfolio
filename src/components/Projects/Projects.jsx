import TechnologyItem from "../TechnogyItem";
import { AiFillGithub } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
// import propTypes from "prop-types";

const Projects = ({ label, link, preview, info, technology, repo }) => {
  return (
    <>
      <div>
        <li>
          <div>
            <title>{label}</title>
            <img
              // src={preview}
              alt={label}
              loading="lazy"
              width="500"
              height="300"
            />
            <div>
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <AiFillGithub size="40" />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label="Live page"
              >
                <FiDownload size="40" />
              </a>
            </div>
            <div>
              <p>{info}</p>
              <ul>
                {technology.map(({ id, name }) => (
                  <TechnologyItem key={id} name={name} />
                ))}
              </ul>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default Projects;
