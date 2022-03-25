import React from "react";

function DogName({name, item, handleClick}){
    return(
        <>
            <span onClick={()=> handleClick(item)}>{name}</span>
        </>
    )
}

export default DogName