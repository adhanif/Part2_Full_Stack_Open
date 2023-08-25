import React from "react";
import axios from "axios";
import axiosClient from "../services/axiosClient";

export default function PersonForm({
  handleName,
  handleNumber,
  newName,
  newNumber,
  persons,
  setNewName,
  setPersons,
  setNewNumber,
}) {
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

    axiosClient
      .create(personObj)
      .then((res) => {
        setPersons([...persons, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
