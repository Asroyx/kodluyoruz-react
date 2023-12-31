import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in."}</h1>;
      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  friends: PropTypes.array,
};

export default User;
