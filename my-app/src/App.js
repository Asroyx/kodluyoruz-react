import "./App.css";

import Header from "./components/Header";

const name = "Asil";
const surname = "Ayazoglu";
const isLoggedIn = true;

function App() {
  return (
    <>
      <h1>{`My name is ${name} and my surname is ${surname}`}</h1>
    </>
  );
}

export default App;
