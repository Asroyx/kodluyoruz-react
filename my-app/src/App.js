import "./App.css";

import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Gökhan",
  },
];

function App() {
  return (
    <>
      <User
        name="Asil"
        surname="Ayazoglu"
        isLoggedIn={true}
        age={"29"}
        friends={friends}
      />
    </>
  );
}

export default App;
