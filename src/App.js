import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiURL] = useState("https://jsonplaceholder.typicode.com/users");
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState(monsters);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
        setLoading(false);
      });
  }, [apiURL]);

  useEffect(() => {
    const matches = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(input.toLowerCase())
    );
    setShowData(matches.length ? matches : []);
  }, [input, monsters]);

  return (
    <div className='App'>
      {loading ? (
        <p>Loading... Please wait.</p>
      ) : (
        <>
          <input
            className='search-box'
            type='search'
            placeholder='Search monsters'
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          {showData.length <= 0 ? (
            <p>No data found...</p>
          ) : (
            showData.map((monster) => <p key={monster.id}>{monster.name}</p>)
          )}
        </>
      )}
    </div>
  );
}

export default App;
