import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css'; 
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
    }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter(monster => { return (monster.name.toLocaleLowerCase().includes(searchField) || monster.email.toLocaleLowerCase().includes(searchField)); }); 
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    };

     
  
  return (<div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box' />
      
      <CardList monsters={filteredMonsters} />
    </div> );
}

export default App;


{/* {
        filteredMonsters.map((monster) => {return(<div key={monster.id}><h1>{monster.name}</h1></div>);})
      } */}

// class App extends Component {

//   constructor() {
//     super();
//     this.state = { 
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {return {monsters: users};},
//       () => {console.log(this.state);}
//     ));
//   }

//   onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//           return { searchField };
//         });
//       };


//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter(monster => { return (monster.name.toLocaleLowerCase().includes(searchField) || monster.email.toLocaleLowerCase().includes(searchField)); }); 
        
//     return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//       {/* {
//         filteredMonsters.map((monster) => {return(<div key={monster.id}><h1>{monster.name}</h1></div>);})
//       } */}
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
//   }
  
// }


