function User(props) {
  return (
    <h1>
      {props.isLoggedIn ? `${props.name} ${props.surname}` : "Not logged in."}
    </h1>
  );
}

export default User;
