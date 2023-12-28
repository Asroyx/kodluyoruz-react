import "./App.css";

import Header from "./components/Header";

const name = "Asil";
const surname = "Ayazoglu";
const isLoggedIn = false; // change this to see information about name and surname

function App() {
  return (
    <>
      <h1>{isLoggedIn && `My name is ${name} and my surname is ${surname}`}</h1>
    </>
  );
}

export default App;
