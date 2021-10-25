import React from 'react'
import { connect } from 'react-redux'
import Button from './button.js'


class Home extends React.Component {
 
    state = {
        lastClicked: null,
        currentEntry: [],
        openParenthesis: []
      }

      handleClick = (event) => {
          debugger

          if(this.props.state.numbers.includes(parseInt(event.target.value))){
            if(typeof(this.state.lastClicked) === 'number'){
              debugger
              let val = this.state.lastClicked.toString().concat(event.target.value)
              val = parseInt(val)
              this.state.currentEntry.pop()
              this.state.currentEntry.push(val)
              this.setState({
                  lastClicked: val
                  })
                  return
            } else {
              debugger
              let val = parseInt(event.target.value)
              this.state.currentEntry.push(val)
              this.setState({
                  lastClicked: val
                  })
                  return
          }}
        

          switch (event.target.value) {
            case '(':
                this.state.parenthesis.push("(")
                break
            case ')':
                if(this.state.parenthesis !== []){
                    this.state.parenthesis.pop()
                } else{
                    let temp = this.state.currentEntry
                    this.setState({
                        currentEntry: "Missing Open Parenthesis"
                        })
                    setTimeout(function() {
                        this.setState({
                            currentEntry: temp
                            })
                        }, 2000);
                    }
                break
            case '+/-':
                if(typeof(this.state.lastClicked) === 'number'){
                let val = this.state.lastClicked * -1
                this.state.currentEntry.pop().push(val)
                this.setState({
                    lastClicked: val,
                    })
                }
              break
            case '=':
                if(this.state.parenthesis !== []) {
                    let temp = this.state.currentEntry
                    this.setState({
                        currentEntry: "Missing Closing Parenthesis"
                      })
                    setTimeout(function() {
                        this.setState({
                            currentEntry: temp
                          })
                      }, 2000);
                } else {

                }
              break
              case 'c':
                  this.setState({
                      lastClicked: null,
                      currentEntry: []
                  })
            default:
                this.state.currentEntry.push(event.target.value)
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
    
    
    
      render() {
        return (
          <div>
            {this.createOperatorButtons()}
            {this.createNumberButtons()}
            
          </div>
        );
      }
    }


    const mapStateToProps = state => {
        return { state}
      }
      
      
export default connect(mapStateToProps)(Home);
      