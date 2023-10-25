const firstName = prompt("What is your first name?")
const lastName = prompt("What is your last name?")

const guestNameTxt = document.getElementById("guestName")

// conditions
if(firstName && lastName) {
    guestNameTxt.innerText = firstName + ' ' + lastName + ","
}



