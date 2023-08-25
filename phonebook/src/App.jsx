import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyWord, setKeyWord] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    newName === ""
      ? alert("Please enter a Name")
      : newNumber === ""
      ? alert("Please enter a phone number")
      : newNumber;

    const findName = persons.find((person) => {
      return person.name === newName;
    });

    if (findName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, personObj]);
    setNewName("");
    setNewNumber("");
  };

  const handlekeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  const personsToShow = !keyWord
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(`${keyWord.toLowerCase()}`)
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by Name keyword:{" "}
        <input value={keyWord} onChange={handlekeyWord} />
      </div>
      <h1>add a new Number</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsToShow &&
        personsToShow.map((person) => {
          return (
            <p style={{ margin: "0px" }} key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
    </div>
  );
}

export default App;
