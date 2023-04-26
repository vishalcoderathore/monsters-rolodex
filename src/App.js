import "./App.css";
import React, { useState, useEffect } from "react";
import CardListComponent from "./components/card-list/CardListComponent";
import SearchBoxComponent from "./components/search-box/SearchBoxComponent";

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

  const onSearchChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='App'>
      {loading ? (
        <p>Loading... Please wait.</p>
      ) : (
        <>
          <SearchBoxComponent onChangeHandler={onSearchChange} searchValue={input} placeholder="Search Monsters" className="monsters-search-box"/>
          {showData.length <= 0 ? (
            <p>No data found...</p>
          ) : (
            <CardListComponent showData={showData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
