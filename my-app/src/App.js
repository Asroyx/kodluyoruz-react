import "./App.css";

import User from "./components/User";

const name = "Asil";
const surname = "Ayazoglu";
const isLoggedIn = false; // change this to see information about name and surname

function App() {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `My name is ${name} and my surname is ${surname}`
          : "You are not logged in"}
      </h1>
    </>
  );
}

export default App;
