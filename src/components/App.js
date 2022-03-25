import React, {useEffect, useState} from "react";
import DogName from "./DogName";
import ShowDog from "./ShowDog";

function App() {
  const [dogs, setDogs] = useState([])
  const [singleDog, setSingleDog] = useState({})
  const [goodDog, setGoodDog] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(resp => resp.json())
    .then(item => setDogs(item))
  }, [])

  function handleClick(item){
    setSingleDog(item)
  }

  function handleChangeDogInfo(updatedItem){
    const updatedList = [...dogs].map(dog => {
      if(dog.id === updatedItem.id){
        return updatedItem
      }else{
        return dog
      }
    })
    setDogs(updatedList)
  }

  const filterDisplayDogs = dogs.filter(item =>{
    if(goodDog === false)return true;

    return item.isGoodDog === goodDog;
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setGoodDog(!goodDog)}>Filter good dogs:{goodDog? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        {filterDisplayDogs.map(item => {
    return <DogName key={item.id} name={item.name} item={item} handleClick={handleClick}/>
  })}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <ShowDog singleDog={singleDog} handleChangeDogInfo={handleChangeDogInfo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
