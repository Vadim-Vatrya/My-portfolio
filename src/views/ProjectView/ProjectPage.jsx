import Projects from "./Projects";
import { ownProjects, commandProjects } from "./Projects";

const ProjectPage = () => {
  return (
    <>
      <div>
        <h1>Project</h1>
        <h2>Team Projects</h2>
        <ul>
          {commandProjects?.map(
            ({ id, name, link, repo, info, technology, preview }) => (
              <Projects
                key={id}
                name={name}
                link={link}
                // preview={preview}
                info={info}
                technology={technology}
                repo={repo}
              />
            )
          )}
        </ul>
        <h2>Own Projects</h2>
        <ul>
          {ownProjects?.map(
            ({ id, name, link, repo, info, technology, preview }) => (
              <Projects
                key={id}
                name={name}
                link={link}
                // preview={preview}
                info={info}
                technology={technology}
                repo={repo}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default ProjectPage;
