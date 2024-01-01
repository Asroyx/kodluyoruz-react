function User(name, surname, isLoggedIn, age) {
  return <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in."}</h1>;
}

export default User;
