let a = +prompt("Input: ");
console.log(a)
if (typeof(a) === "number" && !isNaN(a)) {
    
    if( a>0 ){
        alert("Positive");
    }else if( a==0 ){
        alert("Zero");
    }else {
        alert("Negative");
    }

}else {
    alert("Invalid number")
}
// if( a>0 ){
//     alert("Positive");
// }else if( a==0 ){
//     alert("Zero");
// }else if( a<0 ){
//     alert("Negative");
// }else {
//     alert("Invalid number");
// }


//<ทำแบบรับ input เป็น string>

// let num = prompt("Input: ");

// if (num === null || num.trim() === '' || isNaN(num) ){
//     alert('Invalid number');
// }

//ค่าnull(กดcancel)จะทำไม่ได้เพราะ or คือการเช็คtrueที่ถูกต้องตัวแรกซึ่งในconditionแรกnum.trimจะerror เพราะ .trim เป็นmethodของstringเลยจะเกิดbugได้
// if (num.trim() === '' || num === null || isNaN(num) ){
//     alert('Invalid number');
// }