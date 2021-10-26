import React from 'react'

const Display = (props) => {

    return (
      <div class="display">
        {props.result} <br/>
        {Array.isArray(props.currentEntry) ? props.currentEntry.join(' ') : props.currentEntry}
         
      </div>
  
    )
  }
  
  export default Display