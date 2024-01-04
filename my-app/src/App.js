import "./App.css";

import User from "./components/User";

const friends = ["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"];

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
