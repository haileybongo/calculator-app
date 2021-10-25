import React from 'react'

const Display = (props) => {

    return (
      <div>
        {props.lastClicked} <br/>
        {Array.isArray(props.currentEntry) ? props.currentEntry.join(' ') : props.currentEntry}
         
      </div>
  
    )
  }
  
  export default Display