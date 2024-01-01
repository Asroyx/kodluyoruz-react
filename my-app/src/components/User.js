function User(name, surname, isLoggedIn) {
  return <h1>{isLoggedIn ? `${name} ${surname}` : "Not logged in."}</h1>;
}

export default User;
