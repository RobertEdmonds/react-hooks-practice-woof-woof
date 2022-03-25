import React, {useState, useEffect} from "react";

function ShowDog({singleDog, handleChangeDogInfo}){
    const [behaviorDog, setBehaviorDog] = useState(false)

    function handleDogClick(){
        setBehaviorDog(!behaviorDog)
        const newData ={
            name: singleDog.name,
            isGoodDog: !behaviorDog,
            image: singleDog.image
        }
        fetch(`http://localhost:3001/pups/${singleDog.id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(resp => resp.json())
        .then(item => handleChangeDogInfo(item))   
    }

    useEffect(() => {
        setBehaviorDog(singleDog.isGoodDog)
    },[singleDog])
 
    return(
        <>
            <img src={singleDog.image} alt={singleDog.name} />
            <h2>{singleDog.name}</h2>
            <button onClick={handleDogClick}>{behaviorDog ? "Good Dog!" : "Bad Dog!"}</button>
        </>
    )

}

export default ShowDog