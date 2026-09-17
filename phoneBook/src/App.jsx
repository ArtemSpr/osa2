import "./App.css";

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();

  const showPersons = () => {
    return persons.map((human) => (
      <span className="person-chip" key={human.name}>
        Name: {human.name} <br />
        Number: {human.number || "Unknown"}
      </span>
    ));
  };

  const nameChecker = () => {
    if (!Number.isNaN(Number(newName))) {
      setNewName("");
      return console.log("Now enter your real name");
    } else if (persons.some((human) => human.name === newName)) {
      return console.log(`Name ${newName} is already added into phonebook`);
    } else {
      console.log("NameChecker result is: true");
      return true;
    }
  };

  const numberChecker = () => {
    if (Number.isNaN(Number(newNumber)) || newNumber.length > 11) {
      setNewNumber("");
      return console.log("Now enter your real number");
    } else if (persons.some((human) => human?.number === newNumber)) {
      return console.log(`Your number is already added into phonebook`);
    } else {
      console.log("NumberChecker result is: true");
      return true;
    }
  };

  const checker = () => {
    setNewNumber(Number(newNumber));
    // console.log("Trying make a number from name: " + Number(newName));

    if (nameChecker() === true && numberChecker() === true) {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    } else {
      return alert("Something wen't wrong");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Phonebook</h2>
        <form
          className="phone-form"
          onSubmit={(event) => {
            event.preventDefault();
            checker();
          }}
        >
          <div className="form-row">
            <label>name:</label>

            <input
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </div>

          <div className="form-row">
            <label>number:</label>

            <input
              value={newNumber}
              onChange={(event) => setNewNumber(event.target.value)}
            />
          </div>

          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2 className="title">Numbers</h2>
        <div className="humanList">{showPersons()}</div>
      </div>
    </div>
  );
};

export default App;
