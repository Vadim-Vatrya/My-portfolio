import { techSkills } from "./techSkills";
import { contacts } from "./contacts";
import TechSkills from "../../components/TechSkills/Techskills";
import Contacts from "../../components/Contacts/Contacts";
// import Contacts from "";

// import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <section>
        <div>
          <h2> Hi, glad to welcome! </h2>
          <h1> My name Vadym Vatrya and I am Front-end Developer</h1>
          <p>
            I'm a beginner Front-end Developer. Front-end technologies are the
            most promising and developing IT industry. My primary target is to
            get job in a good team for further education JavaScript, NodeJS and
            framework ReactJS. I want to grow and develop in these technologies.
            You can see the projects on these technologies below. I'm an
            enthusiastic and look forward new challenges.
          </p>
        </div>
        <div>{/* <img alt={my -photo} /> */}</div>
        <div>
          <h2>TechSkills</h2>
          <ul>
            {techSkills.map(({ id, label, icon }) => (
              <TechSkills key={id} label={label} icon={icon} />
            ))}
          </ul>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ id, item, link, icon, name }) => (
              <Contacts
                key={id}
                item={item}
                link={link}
                icon={icon}
                name={name}
              />
            ))}
          </ul>
        </div>
        {/* <Contacts /> */}
      </section>
    </>
  );
};

export default HomePage;
