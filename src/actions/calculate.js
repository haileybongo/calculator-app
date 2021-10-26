export const calculate = (input, dispatch) =>{
    let equation = [...input]

    let parOpenIndex = 0
    let parCloseIndex = input.length
    let parLocations = []

    

    while(parOpenIndex >= 0){
       parOpenIndex =  input.indexOf('(', (parOpenIndex))
       if(parOpenIndex >= 0){
           debugger
           let nextPar = input.indexOf('(', parOpenIndex +1)
            if(nextPar !== -1 && input.indexOf('(', parOpenIndex +1) < input.indexOf(')', parOpenIndex)){
                debugger
            parCloseIndex = input.lastIndexOf(')', parCloseIndex -1)
            parLocations.push([parOpenIndex,parCloseIndex])
            } else {
                parCloseIndex = input.indexOf(')', parOpenIndex)
                parLocations.push([parOpenIndex,parCloseIndex])
            }
       } else break
       parOpenIndex++
    }

    for(let i = parLocations.length -1; i >= 0; i--){
        let paren = input.slice(parLocations[i][0] +1, parLocations[i][1])
        let res = compute(paren)
        let len = parLocations[i][1] - parLocations[i][0] + 1
        input.splice(parLocations[i][0], len, res)
    }

    let finalResult = compute(input)
    dispatch({type: 'ADD_RESULT', finalResult, equation})    

}





function compute(section){

    if(section.includes('^')){
        let power = section.indexOf('^')
        while(power !== -1){
        let result = Math.pow(section[power-1], section[power+1])
        section.splice((power -1), 3, result)
        power = section.indexOf('^')
        }
    }

    if(section.includes('*')){
        let mult = section.indexOf('*')
        while(mult!== -1){
        let result = section[mult-1] * section[mult +1]
        section.splice((mult -1), 3, result)
        mult = section.indexOf('*')
        }
    }

    if(section.includes('/')){
        let divis = section.indexOf('/')
        while(divis!== -1){
        let result = section[divis-1] / section[divis +1]
        section.splice((divis -1), 3, result)
        divis = section.indexOf('/')
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
        let min = section.indexOf('-')
        while(min!== -1){
        let result = section[min-1] - section[min +1]
        section.splice((min -1), 3, result)
        min = section.indexOf('+')
        }
    }

    return section[0]

}