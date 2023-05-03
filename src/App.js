// import "./App.css";
// import React, { useState, useEffect } from "react";
// import CardListComponent from "./components/card-list/CardList.component";
// import SearchBoxComponent from "./components/search-box/SearchBox.component";

// function App() {
//   const [monsters, setMonsters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [input, setInput] = useState("");
//   const [showData, setShowData] = useState(monsters);
//   const apiURL = "https://jsonplaceholder.typicode.com/users"

//   useEffect(() => {
//     fetch(apiURL)
//       .then((res) => res.json())
//       .then((users) => {
//         setMonsters(users);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const matches = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(input.toLowerCase())
//     );
//     setShowData(matches.length ? matches : []);
//   }, [input, monsters]);

//   const onSearchChange = (e) => {
//     setInput(e.target.value)
//   }

//   return (
//     <div className='App'>
//        <h1 className="app-title">Mythical Monsters</h1>
//       {loading ? (
//         <p>Loading... Please wait.</p>
//       ) : (
//         <>
//           <SearchBoxComponent onChangeHandler={onSearchChange} searchValue={input} placeholder="Search Monsters" className="monsters-search-box"/>
//           {showData.length <= 0 ? (
//             <p>No data found...</p>
//           ) : (
//             <CardListComponent monsters={showData} />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
