import "./App.css";

import User from "./components/User";

function App() {
  return (
    <>
      <User name="Asil" surname="Ayazoglu" isLoggedIn={false} />
    </>
  );
}

export default App;
