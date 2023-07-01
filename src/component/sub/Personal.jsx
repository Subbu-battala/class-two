import React from "react";

function Personal(props) {
    return(
        <div>
            <h3>Education</h3>
            <h3>name = {props.fName}</h3>
            <h3>email = {props.fEmail}</h3>
            <h3>Mobile = {props.fMobile}</h3>
        </div>
    )
}

export default Personal