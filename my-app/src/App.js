import "./App.css";

import User from "./components/User";

const friends = [
  {
    name: "Ahmet",
  },
  {
    name: "Tayfun",
  },
  {
    name: "Gökhan",
  },
];

function App() {
  return (
    <>
      <User
        name="Asil"
        surname="Ayazoglu"
        isLoggedIn={false}
        age={29}
        friends={friends}
      />
    </>
  );
}

export default App;
