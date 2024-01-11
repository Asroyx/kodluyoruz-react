// Importing the CSS file for styling
import "./App.css";

// Importing the User component from the specified path
import User from "./components/User";

// Array of friends data
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

// Main App component
function App() {
  // Rendering the User component with some sample data
  return (
    <>
      <User
        name="Asil"
        surname="Ayazoglu"
        isLoggedIn={true}
        age={"29"}
        friends={friends}
        address={{
          title: "Ataşehir/Istanbul",
          zip: "34755",
        }}
      />
    </>
  );
}

// Exporting the App component as the default export
export default App;
