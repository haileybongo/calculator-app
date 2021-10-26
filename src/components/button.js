import React from 'react'

const Button = (props) => {

    return (
      <div class="grid-item">
         <button class="button"  value = {props.buttonName} onClick={props.handleClick}> {props.buttonName}
        </button>
      </div>
  
    )
  }
  
  export default Button