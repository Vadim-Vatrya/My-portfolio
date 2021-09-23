const HomePage = () => {
  return (
    <>
      <section>
        <div>
          <title> Hi, glad to welcome! </title>
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
        <div>{/* <img /> */}</div>
        <title>TechSkills</title>
        <TechSkills />
        <title>Contacts</title>
        <Contacts />
      </section>
    </>
  );
};

export default HomePage;
