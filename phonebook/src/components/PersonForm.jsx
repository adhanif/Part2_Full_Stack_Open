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

    if (newName === "") {
      alert("Please enter a Name");
      return;
    } else if (newNumber === "") {
      alert("Please enter a phone number");
      return;
    }

    const findName = persons.find((person) => {
      return person.name === newName;
    });

    if (findName) {
      // console.log(findName);
      const confirmed = window.confirm(
        `${newName} is already added to phonebook, do you want to replace the old number with a new one?`
      );
      if (confirmed) {
        axiosClient
          .update(findName.id, { name: newName, number: newNumber })
          .then((res) => {
            const updatedPersons = persons.map((oldperson) =>
              oldperson.id != findName.id ? oldperson : res.data
            );
            setPersons(updatedPersons);
          })
          .catch((err) => {
            console.log(err);
          });
        setNewName("");
        setNewNumber("");
        return;
      } else if (!confirmed) {
        setNewName("");
        setNewNumber("");
        return;
      }
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
