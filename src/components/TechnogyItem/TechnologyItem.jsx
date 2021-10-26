const TechnologyItem = ({ id, name }) => {
  return (
    <>
      <div>
        <li key={id}>{name}</li>
      </div>
    </>
  );
};

export default TechnologyItem;
