import React from 'react'
import { connect } from 'react-redux'
import Button from './button.js'
import Display from './display.js'
import { calculate } from '../actions/calculate.js'


class Home extends React.Component {
 
    state = {
        lastClicked: null,
        currentEntry: [],
        parenthesis: []
      }

      handleClick = (event) => {

          if(this.props.state.numbers.includes(parseInt(event.target.value))){
            if(typeof(this.state.lastClicked) === 'number'){
              let val = this.state.lastClicked.toString().concat(event.target.value)
              val = parseInt(val)
              this.state.currentEntry.pop()
              this.state.currentEntry.push(val)
              this.setState({
                  lastClicked: val
                  })
                  return
            } else {
              let val = parseInt(event.target.value)
              this.state.currentEntry.push(val)
              this.setState({
                  lastClicked: val,
                  })
                  return
          }}
        

          switch (event.target.value) {
            case '(':
                this.state.parenthesis.push('(')
                this.state.currentEntry.push('(')
                this.setState({
                    lastClicked: event.target.value,
                    })
                break
            case ')':
                if(this.state.parenthesis.length !== 0){
                    this.state.parenthesis.pop()
                    this.state.currentEntry.push(')')
                    this.setState({
                        lastClicked: event.target.value,
                        })
                } else{
                    let temp = this.state.currentEntry
                    this.setState({
                        currentEntry: "Missing Open Parenthesis"
                        })
                    setTimeout(() => {
                        this.setState({
                            currentEntry: temp
                            })
                        }, 2000);
                    }
                break
            case '+/-':
                if(typeof(this.state.lastClicked) === 'number'){
                let val = this.state.lastClicked * -1
                this.state.currentEntry.pop()
                this.state.currentEntry.push(val)
                this.setState({
                    lastClicked: val,
                    })
                }
              break
            case '=':
                debugger
                if(this.state.parenthesis.length !== 0) {
                    let temp = this.state.currentEntry
                    this.setState({
                        currentEntry: "Missing Closing Parenthesis"
                      })
                    setTimeout(() =>{
                        this.setState({
                            currentEntry: temp
                          })
                      }, 2000);
                } else {
                    calculate(this.state.currentEntry, this.props.dispatch)
                    debugger
                    //this.state.currentEntry.push("= " + this.props.state.lastResults[0])
                    this.setState({
                        lastClicked: null
                    })
                }
              break
              case 'c':
                  this.setState({
                      lastClicked: null,
                      currentEntry: []
                  })
                break
            default:
                if(this.props.state.operators.includes(this.state.lastClicked)){
                    this.state.currentEntry.pop()
                }
                this.state.currentEntry.push(event.target.value)
                this.setState({
                    lastClicked: event.target.value
                })
                
              return
          }
        
    

        }
    

      createOperatorButtons() {
        return(
            this.props.state.operators.map(operator=> <Button buttonName = {operator} handleClick = {this.handleClick} />))
            
    }


    createNumberButtons(){
        return(
            this.props.state.numbers.map(number=> <Button buttonName = {number} handleClick = {this.handleClick} />))
    }

    createActionButtons(){
        return(
            this.props.state.actionButtons.map(action => <Button buttonName = {action} handleClick = {this.handleClick} />)
        )
    }
    
    
    
      render() {
        return (
          <div>
            {<Display lastClicked = {this.state.lastClicked} currentEntry = {this.state.currentEntry}/> }
            {this.createOperatorButtons()}
            {this.createNumberButtons()}
            {this.createActionButtons()}
            
          </div>
        );
      }
    }


    const mapStateToProps = state => {
        return {state}
      }
      
      
export default connect(mapStateToProps)(Home);
      