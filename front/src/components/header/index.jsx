import { React, useState } from "react";

const Header = props =>{
    const [count,setCount] = useState(0);
    const upCount = e =>{
        e.preventDefault();
        setCount(count + 1);
    }
    return(
        <>
        <h1>Header Content</h1>
        <p>count is {count}</p>
        <button onClick={upCount}></button>
        </>
    )
}