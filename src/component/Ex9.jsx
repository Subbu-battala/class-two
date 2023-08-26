import React from 'react'
import PropTypes from 'prop-types'

function Ex9(props) {
  return (
    <div>
        <h1>Default Props</h1>
        <h1> name = { props.name } </h1>
        <h1> age = { props.age } </h1>
        <h1> isView = { props.isView ? "true" : "false" } </h1>
        <h1> Colors = { props.colors } </h1>
    </div>
  )
}

// define the props internally with in the component
Ex9.defaultProps = {
    name: "test Name",
    age: 22,
    isView: true,
    colors: ["green", "blue", "Red"]
}

// define data types of props
Ex9.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isView: PropTypes.bool,
    colors: PropTypes.array

}

export default Ex9
