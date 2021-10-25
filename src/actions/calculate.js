export const calculate = (input, dispatch) =>{

    let equation = [...input]

    let parOpenIndex = 0
    let parCloseIndex = input.length
    let parLocations = []

    while(parOpenIndex >= 0){
       parOpenIndex =  input.indexOf('(', (parOpenIndex === 0 ? parOpenIndex : parOpenIndex + 1))
       if(parOpenIndex >= 0){
        parCloseIndex = input.lastIndexOf(')', parCloseIndex -1)
        parLocations.push([parOpenIndex,parCloseIndex])
       } 
    }

    for(let i = parLocations.length -1; i >= 0; i--){
        let paren = input.slice(parLocations[i][0] +1, parLocations[i][1])
        debugger
        let res = compute(paren)
        let len = parLocations[i][1] - parLocations[i][0] + 1
        debugger
        input.splice(parLocations[i][0], len, res)
        debugger
    }

    let finalResult = compute(input)
    debugger
    dispatch({type: 'ADD_RESULT', finalResult, equation})    

}





function compute(section){

    if(section.includes('^')){
        let power = 0
        while(power !== -1){
        power = section.indexOf('^')
        let result = Math.pow(section[power-1], section[power+1])
        section.splice(power -1, 3, result)
        }
    }

    if(section.includes('*')){
        let mult = 0
        while(mult!== -1){
        mult = section.indexOf('*')
        let result = section[mult-1] * section[mult +1]
        section.splice(mult -1, 3, result)
        }
    }

    if(section.includes('/')){
        let divis = 0
        while(divis!== -1){
        divis = section.indexOf('/')
        let result = section[divis-1] / section[divis +1]
        section.splice(divis -1, 3, result)
        }
    }

    if(section.includes('+')){
        let add = section.indexOf('+')
        while(add!== -1){
        let result = section[add-1] + section[add +1]
        section.splice((add-1), 3, result)
        add = section.indexOf('+')
        }
    }

    if(section.includes('-')){
        let min = 0
        while(min!== -1){
        min = section.indexOf('+')
        let result = section[min-1] + section[min +1]
        section.splice(min -1, 3, result)
        }
    }

    return section[0]

}