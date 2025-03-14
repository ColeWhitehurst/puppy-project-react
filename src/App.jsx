import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

const dogs = [
  { id: 1, name: "Logan", breed: "Italian Greyhound", age: 14 },
  { id: 2, name: "Chase", breed: "Italian Greyhound", age: 12 },
  { id: 3, name: "Lincoln", breed: "Mixed Rescue", age: 6 },
];

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  
  // function handleClick() {
  //   return setFeatPupId(puppy.id)};

    const featuredPup = puppies.find((pup)=> pup.id === featPupId)

    return (
      <div className="App">
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        
        {puppies.map((puppy) => {
          return (
            <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
      </div>
    );
  };

export default App;
