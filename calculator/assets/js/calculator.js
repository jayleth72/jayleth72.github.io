$(document).ready(function(){
    // Stores the inputs from the user to calculate later
    var inputs=[""];

    // String to store current input string
    var totalString;

    // Operators array for validaton without the .
    var operators1 = ["+", "-", "/", "*"];

    // Operators array for validaton with the . for validation
    var operators2 = ["."];

    // Numbers for validation
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getValue(input) {
        if(operators2.includes(inputs[inputs.length-1]===true && input==="."))
            console.log("Duplicate '.' ");
        else if(inputs.length===1 && operators1.includes(input)===false){
            inputs.push(input);
        }
        else if(operators1.includes(inputs[inputs.length-1])===false ){
            inputs.push(input);
        }
        else if(nums.includes(Number(input)))
            inputs.push();

        update();
    }

    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getTotal() {
        totalString = inputs.join("");
        $("steps").html(eval(totalString));    
    }

    $("a").on("click", function(){
        if(this.id==="deleteAll"){
            inputs=[""];
            update();
        }
        else if(this.id==="backOne"){
            inputs.pop();
            update();
        }
        else if(this.id==="total"){
            getTotal();
        }
        else{
            if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
                // last value in input array not an aoperator  
                getValue(this.id);  
            }
            else{
                getValue(this.id);
            }
        }
    })
});
