function User(name, surname, isLoggedIn, age, friends) {
  return;
  <>
    <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Not logged in."}</h1>;{" "}
    {friends.map((friend, index) => (
      <div>
        {index}- {friend}
      </div>
    ))}
  </>;
}

export default User;
