let num = prompt("Input score: ");
let grade = (num !== null && +num >= 0 && +num <= 100) ? ((+num >= 80) ? "A":(+num < 80 && +num >= 70)? "B" : (+num < 70 && +num >= 60)? "C":(+num < 60 && +num >= 50)? "D": "F") : "Please input correct value";
alert(grade);
