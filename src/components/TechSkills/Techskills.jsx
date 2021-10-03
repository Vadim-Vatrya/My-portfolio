const TechSkills = ({ label, icon }) => {
  return (
    <>
      <li>
        <img src={icon} alt={label} width="40" height="40" />
        <p>{label}</p>
      </li>
    </>
  );
};

export default TechSkills;
