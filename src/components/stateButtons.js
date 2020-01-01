import React from 'react'

const StateButtons = () => {
  const buttonStyle = {
    marginRight: `10px`, 
    marginTop: `10px`, 
    borderColor: `indigo`,
    borderSize: `1px`,
    borderStyle: `solid`,
    background: `red`,
    color: `indigo`,
    borderRadius: `5px`,
    cursor: `not-allowed`
  }
  return(
    <div>
      <button style={buttonStyle} disabled>First State</button>
      <button style={buttonStyle} disabled>Second State</button>
      <button style={buttonStyle} disabled>Another State</button>
    </div>
  )
}

export default StateButtons