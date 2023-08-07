let num = prompt("Input number: ");
if( num !== null && +num >= 0 && +num <= 100){
    if (num >= 80){
        alert("A");
    }else if( +num < 80 && +num >= 70){
        alert("B");
    }else if( +num < 70 && +num >= 60){
        alert("c");
    }else if( +num < 60 && +num >= 50){
        alert("d");
    }else {
        alert("F");
    }
}else{
    alert("Please input correct value");
}