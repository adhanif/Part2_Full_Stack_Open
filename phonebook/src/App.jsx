import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const findName = persons.find((person) => {
      return person.name === newName;
    });
    if (findName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObj = {
      name: newName,
    };
    setPersons([...persons, personObj]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => {
        return (
          <p style={{ margin: "0px" }} key={person.name}>
            {person.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
