let num = prompt("Input number: ");
if (num === null || num.trim() === '' || isNaN(num) ){
    alert('Invalid number');
}else if (+num%2 === 0){
    alert("Even number");
}else {
    alert("Odd number");
}