import "./App.css";

import User from "./components/User";

const name = "Asil";
const surname = "Ayazoglu";
const isLoggedIn = false; // change this to see information about name and surname

function App() {
  return (
    <>
      <User name="Asil" surname="Ayazoglu" isLoggedIn={false} />
    </>
  );
}

export default App;
