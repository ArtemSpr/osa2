import "./App.css";

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const showPersons = () => {
    return persons.map((human) => (
      <span className="person-chip" key={human.name}>
        {human.name}
      </span>
    ));
  };

  const nameChecker = () => {
    if (persons.some((human) => human.name === newName)) {
      return alert(`Name ${newName} is already added into phonebook`);
    } else {
      setPersons([...persons, { name: newName }]);
      setNewName("");
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
            nameChecker();
          }}
        >
          <div className="form-row">
            <label>name:</label>
            <input
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
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
