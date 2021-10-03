const Contacts = ({ icon, item, link, name }) => {
  return (
    <>
      <li>
        <img src={icon} alt={item} width="40" />
        <a href={link}>{name}</a>
      </li>
    </>
  );
};

export default Contacts;
