import React from 'react'

const Display = (props) => {

    function displayFunctions(funcs, results){

        for(let i = funcs.length -1; i >=0; i--){
           return <div> {funcs[i]} = {results[i]}</div>
        }

    }

    return (
      <div>
      
        {props.lastFunctions ? displayFunctions(props.lastFunctions, props.lastResults) : null}
          
      </div>
  
    )
  }
  
  export default Display