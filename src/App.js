import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';




function App() {
  
  const players=['Rono','Ronda','Cristiano'];
  const stats=[
    {name:'CR7',goal:'844'},
    {name:'Messi', goal: '798'},
    {name:'Pele', goal: '700'}
  ]
  const statsDetail=stats.map(stat=>stat.name);
  console.log(statsDetail);
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {
          players.map(players=> <li>{players}</li>)
        }
        {
          stats.map(stats=> <li>{stats.name}</li>)
        }
        {/* {
          Person.map(pd=><Person person={pd}></Person>)
        } */}
      </ul>

        <p>
          Edit done....<code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
       <Users></Users>
        <p>I am a react person</p>
        {/* <h1>{person.title+" "+person.band}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Person name={players[0]} fraud="Messi"></Person>
        <Person name="Ron" fraud="Messi"></Person>
      </header>
    </div>
  );

  function Counter()
  {
    const [count,setCount]=useState(10);
    const handleIncrease =()=> setCount(count+1);
    
    return (
      <div>
        <h1>
          Count: {count}
        </h1>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onMouseMove={()=>setCount(count+1)}>Increase</button>
      </div>
    )
  }

  function Users()
  {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])
    return (
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
          users.map(user=> <li>{user.name}</li>)
          }
          
        </ul>
      </div>
    )
  }
  function Person(props)
  {
    const personStyle=
    {
      border: '2px solid red',
      margin:'10px'
    }
    console.log(props);
    return (
      <div style={personStyle}>
        <h1>Idol: {props.name}</h1>
    <h3>Fraud: {props.fraud}</h3>
    </div>
    )
   
  }
}

export default App;
