//object of Employee
const employee = {
    registrationId: "",
    fullname: "" , gender: "" ,email: "", password: "",phoneNumber: ""};


/*
methods for employee form
*/
//fullname
const name_pattern = /^[A-Za-z]{2,}$/;
const fullname = document.getElementById("fullname");
fullname.addEventListener("keyup",({key, keyCode}) => {
    if(key  == 'enter' || keyCode == 13){
        
        if(fullname.value.match(name_pattern)){
            // clearing error message
            document.getElementsByClassName("error-message")[0].innerHTML = "";
            //change display of fullname
            document.getElementsByClassName("input-fullname-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-fullname-div")[0].classList.add("inactiveInput");
            //create custom label for gender
            document.getElementById('gender-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Can I know your gender`;
            //change display of gender
            document.getElementsByClassName("input-gender-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-gender-div")[0].classList.remove("inactiveInput");
        }
        else{
            //adding error message
            document.getElementById("fullname").style.outlineColor= "#cc0000"; 
            document.getElementsByClassName("error-message")[0].innerHTML = "Fullname should have only letters and minimum length 2!";
        }
    }
})

//gender
let gender ="";
function changeDisplayGender(id){
    gender = document.getElementById(id);
    if(gender.checked){
        gender = gender.value;
        //change display of gender
        document.getElementsByClassName("input-gender-div")[0].classList.remove("activeInput");
        document.getElementsByClassName("input-gender-div")[0].classList.add("inactiveInput");
        //create custom label for email
        document.getElementById('email-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Can I know your email`;
        //change display of email
        document.getElementsByClassName("input-email-div")[0].classList.add("activeInput");
        document.getElementsByClassName("input-email-div")[0].classList.remove("inactiveInput");

    }
    
};

//email
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.getElementById("email");
email.addEventListener("keyup",({key, keyCode}) => {
    if(key  == 'enter' || keyCode == 13){
        
        if(email.value.match(mailformat)){
            // clearing error message
            document.getElementsByClassName("error-message")[0].innerHTML = "";
            //change display of email
            document.getElementsByClassName("input-email-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-email-div")[0].classList.add("inactiveInput");
            //create custom label for password
            document.getElementById('password-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Please set your password`;
            //change display of password
            document.getElementsByClassName("input-password-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-password-div")[0].classList.remove("inactiveInput");
        }
        else{
            //adding error message
            document.getElementById("fullname").style.outlineColor= "#cc0000"; 
            document.getElementsByClassName("error-message")[0].innerHTML = "Entered email format is not correct!";
        }
    }
});



//password
const pwd_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
let flag = false;
function checkPassword(value){
    // var pwd = document.getElementById('password').value;
    // console.log(pwd);
    if(value.match(pwd_pattern)){
        flag = true;
        document.getElementsByClassName("error-message")[0].innerHTML = "";
        if(value.length > 10)
            document.getElementById("password").style.outlineColor= "#00ff00";
        else
            document.getElementById("password").style.outlineColor= "#ff6600";
    }
    else{
        document.getElementById("password").style.outlineColor= "#cc0000"; 
        document.getElementsByClassName("error-message")[0].innerHTML = 
        "Password -> should contains Uppercase, Lowercase, Numeric, Alphanumeric, and length minimum 8";
    }
}

const password = document.getElementById("password");
password.addEventListener("keyup",({key, keyCode, target}) => {
    if(key  == 'enter' || keyCode == 13){
        if(flag){
            //change display of password
            document.getElementsByClassName("input-password-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-password-div")[0].classList.add("inactiveInput");
            //create custom label for password confirm
            document.getElementById('password-confirm-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Please confirm your password`;
            //change display of password confirm
            document.getElementsByClassName("input-password-confirm-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-password-confirm-div")[0].classList.remove("inactiveInput");
        }
        else{
            checkPassword(password.value);
        }
    }
    else{
        checkPassword(target.value);
    }
});


//password-confirm
const password_confirm = document.getElementById("password-confirm");
password_confirm.addEventListener("keyup",({key, keyCode}) => {
    if(key  == 'enter' || keyCode == 13){
        // check for confirmation
        if(password_confirm.value.match(password.value)){
            //clearing error message
            document.getElementsByClassName("error-message")[0].innerHTML ="";

            //change display of password
            document.getElementsByClassName("input-password-confirm-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-password-confirm-div")[0].classList.add("inactiveInput");
            //create custom label for gender
            document.getElementById('phone-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Can I know your phone number`;
            //change display of gender
            document.getElementsByClassName("input-phone-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-phone-div")[0].classList.remove("inactiveInput");
        }
        else{
            //adding error message
            document.getElementById("fullname").style.outlineColor= "#cc0000"; 
            document.getElementsByClassName("error-message")[0].innerHTML = 
                                                                "Password did not match";
        }
    }
});

//phone number
const phoneno = /^\d{10}$/;
const phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener("keyup",({key, keyCode}) => {
    if(key  == 'enter' || keyCode == 13){
        
        if(phoneNumber.value.match(phoneno)){
            document.getElementsByClassName("error-message")[0].innerHTML = "";
            //change display of phone number
            document.getElementsByClassName("input-phone-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-phone-div")[0].classList.add("inactiveInput");
            //create custom label for gender
            document.getElementById('password-label').innerHTML =`Hey ${fullname.value.toLocaleUpperCase()}! Please set your password`;
            //change display of gender
            document.getElementsByClassName("input-submit-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-submit-div")[0].classList.remove("inactiveInput");
        }
        else{
            //adding error message
            document.getElementById("fullname").style.outlineColor= "#cc0000"; 
            document.getElementsByClassName("error-message")[0].innerHTML = "Phone number should have only digits and of length 10";
        }
    }
});

// funtion to generate registration id
function randomNumber(){ 
    return   (Math.floor(Math.random() * 100) + 1 );}

//submit form
function SubmitEmployee(){
    employee.fullname = fullname.value;
    employee.gender = gender;
    employee.email = email.value;
    employee.password = password_confirm.value;
    employee.phoneNumber = phoneNumber.value;
    employee.registrationId =  randomNumber();
    console.log(employee);
    //change display of submit button
    document.getElementsByClassName("input-submit-div")[0].classList.remove("activeInput");
    document.getElementsByClassName("input-submit-div")[0].classList.add("inactiveInput");

    const element = document.createElement('div');
    element.classList.add("registration-id");
    element.appendChild(document.createTextNode(`Registration Id : ${employee.registrationId}`));
    document.getElementById("employee-form").appendChild(element);

    
    // setTimeout(function(){

    // }, 500);
    //change display of vehicle name
    document.getElementById("vehicle").classList.remove("invisible");
    document.getElementsByClassName("input-vehicle-name-div")[0].classList.add("activeInput");
    document.getElementsByClassName("input-vehicle-name-div")[0].classList.remove("inactiveInput");
}