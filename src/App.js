import {useState,useEffect} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log("render");
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://gateway.marvel.com/v1/public/characters?limit=27&ts=1&apikey=ced273effdf0f9fd64011765544c3091&hash=0b459d5f662153950a3eff88f910b5d7')
      .then(response => response.json())
      .then(json => setMonsters(json.data.results))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log("searchField: ",searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Marvel Characters Api</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

