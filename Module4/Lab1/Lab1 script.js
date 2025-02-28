let firstNum
let secNum
let operation
let answersElem =  document.getElementById('answers')

//click the number
function clickNumber(num){
    let newNum = new String(num)
    if (!firstNum){
        firstNum = newNum
        answersElem.innerText = firstNum;
    
    }else if (!operation){
        firstNum +=newNum
        answersElem.innerText = firstNum;

    }else if (!secNum) {
        secNum = newNum
        answersElem.innerText = secNum;
        
    }else {
        secNum += newNum
        answersElem.innerText = secNum;   
    }
  }

  // Click operator
  function clickOperator(event){
    operation = event
  }

// Click equal for results
function clickEqual(){
    let num1 = parseInt(firstNum)
    let num2 = parseInt(secNum)
    let calc = 0
    switch (operation){
        case '+'
        calc = (num1 + num2);
        break;
      case '-':
        calc = (num1 - num2);
        break;
      case '*':
        calc = (num1 * num2);
        break;
      case '/':
        if (num2 !== 0) {
          calc = (num1 / num2);
        } else {
          calc = 'Error';
        }
        break;
      default:
        break;
    }
    }
    clickClear();
    firstNum = new String(calc)
    resultElem.innerText = calc


// Clear result
function clickClear(){
    firstNum = undefined
    secNum = undefined
    operation = undefined

    answersElem.innerText = " "
}