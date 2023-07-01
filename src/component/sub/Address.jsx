import React from "react";

function Address(props){
    return(
        <div>
            <h3>Adress</h3>
            <h3>city = {props.fCity}</h3>
            <h3>city = {props.fZip}</h3>
        </div>
    )
}

export default Address