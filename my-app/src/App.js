import "./App.css";

import User from "./components/User";

function App() {
  return (
    <>
      <User
        name="Asil"
        surname="Ayazoglu"
        isLoggedIn={false}
        age={29}
        friends={["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
      />
    </>
  );
}

export default App;
