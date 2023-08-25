import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState, useEffect } from "react";

import axiosClient from "./services/axiosClient";

function App() {
  const [notes, setNotes] = useState([]);
  const [persons, setPersons] = useState();
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    axiosClient.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handlekeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyWord={keyWord} handlekeyWord={handlekeyWord} />
      <h1>add a new Number</h1>

      <PersonForm
        handleName={handleName}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons keyWord={keyWord} persons={persons} />
    </div>
  );
}

export default App;
