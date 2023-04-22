// create variables for the ids in the form 
var nameError = document.getElementById ('name-error');
var phoneError = document.getElementById ('phone-error');
var emailError = document.getElementById ('email-error');
var subjectError = document.getElementById ('subject-error');
var messageError = document.getElementById ('message-error');

// next ad function that will valibate the input box
function validateName(){
        // this variable will store the content written in the fname input box
    var name = document.getElementById('customer-name').value;
        // ad the condition 
    if (name.length === 0){
        nameError.innerHTML = 'Name is required';
            // why return false? 
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ // give source for this code 
    nameError.innerHTML = 'Write full name';
    return false;
    }

        // if there is no error, have a success message displayed 
    nameError.innerHTML = 'valid';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('phone-number').value;
    if (phone.length == 0)
        phoneError.innerHTML = 'phone number required';
        return false;

    nameError.innerHTML = 'valid';
    return true;
}
