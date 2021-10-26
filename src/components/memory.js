import React from 'react'

const Display = (props) => {

    function displayFunctions(funcs, results){

        let displayArray = []
        for(let i = funcs.length -1; i >=0; i--){
           displayArray.push(<div> {funcs[i]} = {results[i]}</div>)
        }

        return displayArray.map(line => line)

    }

    return (
      <div class="memory">
          Memory:<br/>
          <br/>
        {props.lastFunctions ? displayFunctions(props.lastFunctions, props.lastResults) : null}
          
      </div>
  
    )
  }
  
  export default Display