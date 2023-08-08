let user = prompt("Username: ");

if ( user === "" ) {
    alert("user is required");
}

let pass = prompt("Password: ");
if (pass === "") {
    alert("password is required");
}else if ((user == "admin" && pass == "1234") || (user ="john" && pass == "qwerty")) {
    alert(`Hello: ${user}`);
}else {
    alert ("invalid username or password");
}
