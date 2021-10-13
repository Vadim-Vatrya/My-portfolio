// import propTypes from "prop-types";
const Projects = ({ name, link, preview, info, technology, repo }) => {
  return (
    <>
      <div>
        <li>
          <div>
            <h3>
              <img />
              <div>
                <a></a>
                <a></a>
              </div>
              <div>
                <p></p>
                <ul>
                  {technology.map(({ id, name }) => (
                    <TechnologyItem key={id} name={name} />
                  ))}
                </ul>
              </div>
            </h3>
          </div>
        </li>
      </div>
    </>
  );
};
