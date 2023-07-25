const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }
    // add digit to calculator screen
    addDigit(digit){
        //check if current operation already has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }
        
        this.currentOperation = digit
        this.updateScreen()
    }

    //Process all calculator operations
    processOperation(operation){
        //check if current is empyt
        if(this.currentOperationText.innerText === "" && operation !== "C"){
                //change operation
            if(this.previousOperationText.innerText !== ""){
                 this.changeOperation(operation);
            }
            return;
        }


        // Get current and previus value
        let operationValue;
        let previus = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
               operationValue = previus + current;
               this.updateScreen(operationValue, operation, current, previus);
              break;
            case "-":
               operationValue = previus - current;
               this.updateScreen(operationValue, operation, current, previus);
              break;
            case "/":
               operationValue = previus / current;
               this.updateScreen(operationValue, operation, current, previus);
              break;
            case "*":
               operationValue = previus * current;
               this.updateScreen(operationValue, operation, current, previus);
              break;
            case "DEL":
                this.processDelOperator();
            case "CE":
                this.processClearCurrentOperation();
               break;
            case "C":
                this.processClearOperation();
               break;
            case "=":
                this.processEqualOperator();
                break;   
            default:
            return;
        }
    }

    // change value of the calculator screeen
    updateScreen(operationValue = null, operation = null, current = null, previus = null) {
        
        console.log(operationValue, operation, current, previus);
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            //check if value is zero, if it is just add current value
            if(previus === 0){
                operationValue = current;
            }
            // add current value to previus
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }


    // change math operation
    changeOperation(operation){

        const mathOperation = ["*", "/", "+", "-"]

        if(!mathOperation.includes(operation)){
            return
        }
        // 123 OPERATION
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
 // Delete the last digit
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }
//  Clear current operation
    processClearCurrentOperation(){
        this.currentOperationText.innerText = "";
    }
 // Clear all operation
    processClearOperation(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";

    }
 // Process an operation
    processEqualOperator(){
        const operation = previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
           calc.addDigit(value);
        }else{
            calc.processOperation(value)
        }
    })
})