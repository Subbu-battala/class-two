import React, {useState} from 'react'
import Personal from './sub/Personal'
import Address from './sub/Address'
import Edu from './sub/Edu'

// personal Component

// address 

// Education

function Ex8 (props) {
    const [user,setState] = useState({
        name: "subbu",
        email:"subbubattala01@gmail.com",
        mobile : "6309309253",
        address : {
            city : "banglore",
            zip : 556789
        },
        edu : {
            type : "Degree",
            title : "b.com",
            year : 2022
        }
    })

    return (
        <div>
            <h1>Props in Functional component</h1>
            <Personal fName={user.name} fEmail={user.email} fMobile={user.mobile}/>
            <Address fCity={user.address.city} fZip={user.address.zip}/>
            <Edu fType={user.edu.type} fTitle={user.edu.title} fYear={user.edu.year}/>
        </div>
    )
}

export default Ex8