import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in."}</h1>

      {address.title}
      {address.zip}

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
  address: propTypes.shape({
    title: propTypes.string,
    zip: propTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
};

export default User;
