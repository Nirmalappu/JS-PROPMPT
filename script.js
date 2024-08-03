let number = prompt("Enter a number between 0 and 1 million")

if (isNaN(number) || number <0 || number>1000000){
document.write("invalid number")
}
else{

    let numberValue=+number
    let sum = (numberValue*(numberValue+1)/2)
    document.write(`Sum of numbers up to ${number} is ${sum}`);
}
