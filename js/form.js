function sameAddress(button) {
	if (button.checked === true) {
	const street_value = document.querySelector("#street").value;
	document.querySelector("#bill-street").value = street_value;
	}
	else {
		document.querySelector("#bill-street").value = "";
	}
}
function checkEmails(){
    console.log("Changed the email")
    let em1 = document.querySelector("#email")
    let em2 = document.querySelector("#email2")
    console.log(em1.value)
    console.log(em2.value)

    if (em1.value != em2.value){
        alert("The two emails must match")
        em2.focus()
        return false;    
    }
    return true;
}
