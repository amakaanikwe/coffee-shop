//Listen fot form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    const name = getImputVal('name');
    const email = getImputVal('email');
    const commenta = getImputVal('comments');
}

//Get form values
function getInputVal(id){
    return document.getElementById(id).nodeValue;
}