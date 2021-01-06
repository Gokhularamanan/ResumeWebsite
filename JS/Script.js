function validate() {

   //var first= document.forms["form"]["firstname"].value
    var firstname = document.form.firstname.value;
    var lastname = document.form.lastname.value;
    var email = document.form.email.value;
    var message = document.form.message.value;
    if (firstname == "") {
        

        alert("enter your firstname");
        return false;
    }
    else if (lastname == "") {
        alert("enter your lastname");
        return false;
    }
    else if (email == "") {
        alert("enter your email");
        return false;
    }
    else if (message == "") {
        alert("enter your message");
        return false;
    }
    else {
        alert("message sent");
        return true;
    }
}

function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function myFunction1() {
    var y = document.getElementById("myDiv1");
    if (y.style.display === "none") {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}
function myFunction2() {
    var z = document.getElementById("myDiv2");
    if (z.style.display === "none") {
        z.style.display = "block";
    }
    else {
        z.style.display = "none";
    }
}