import React from "react";
import { useState } from "react";

function Ex5(props) {
    const [num,setNum] = useState(0)

    const addOne = () => {
        // setNum(1)
        setNum(num+1)
    }

    return (
        <div>
            <h3>State and handler</h3>
            <h1> number = {num} </h1>
            <button onClick={() => addOne()}>Add+</button>
        </div>
    )
}

export default Ex5


/* 
    function ex1 (props) {
        return(

        )
    }

    const ex1 = (props) => {
        return(

        )
    }

    const ex1 = function(props) {

    }

    class ex1 extends React.component{
        constructor(props) {
            super(props);
        }
    }

    render() {
        return(
            
        )
    }


*/