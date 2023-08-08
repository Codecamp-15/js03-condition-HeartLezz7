 let x = +prompt("Input number 1 : ");
 let y = +prompt("Input number 2 : ");
 let z = +prompt("Input number 3 : ");
 let max ;
 let mid ;
 let min ;

 if (x>=y && x>=z){
    max = x;
    if (y>=z){
        mid = y;
        min = z;
    }else {
        mid = z;
        min = y;
    }
 }else if (y>=x && y>=z){
    max = y;
    if (x>=z){
        mid = x;
        min = z;
    }else {
        mid = z;
        min = x;
    }
 }else if (z>=x && z>=y){
    max = z;
    if (x>=y) {
        mid = x;
        min = y;
    }else {
        mid = y;
        min = x;
    }
 }

 console.log(`MAX = ${max}, MID = ${mid}, MIN = ${min}`);
