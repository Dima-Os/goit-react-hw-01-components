const UserInfo = ({ name, tag, location }) => {
  return (
    <>
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};

export default UserInfo;
