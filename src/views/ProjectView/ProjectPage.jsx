import Projects from "";
import { ownProjects, commandProjects } from "./MyProjects";

const ProjectPage = () => {
  return (
    <>
      <div>
        <h1>Project</h1>
        <h2>Teamwork Projects</h2>
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
            ({ id, label, link, repo, info, technology, preview }) => (
              <Projects
                key={id}
                label={label}
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
