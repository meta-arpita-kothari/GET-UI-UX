//object of vehicle
const vehicle = {
    name:"", type:"", vehicleNumber:"", employeeId: "", indetificationArea:""
};


// vehicle name
const vehicle_name = document.getElementById("vehicle-brand");
vehicle_name.addEventListener("keyup", ({key, keyCode}) => {
        if(key  == 'enter' || keyCode == 13){
           
            //change display of vehicle name
            document.getElementsByClassName("input-vehicle-name-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-vehicle-name-div")[0].classList.add("inactiveInput");
            //create custom label for vehicle type
            document.getElementById('vehicle-type-label').innerHTML ="Hey, Which vehicle do you have?";
            //change display of vehicle type
            document.getElementsByClassName("input-vehicle-type-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-vehicle-type-div")[0].classList.remove("inactiveInput");
        }
});

let vehicle_type="";
function selectType(){
    vehicle_type = document.getElementById("vehicle-type");
    // change display of vehicle type
    document.getElementsByClassName("input-vehicle-type-div")[0].classList.remove("activeInput");
    document.getElementsByClassName("input-vehicle-type-div")[0].classList.add("inactiveInput");
    //create custom label for vehicle number
    document.getElementById('vehicle-number-label').innerHTML ="Hey, Can I know your vehicle number";
    //change display of vehicle number
    document.getElementsByClassName("input-vehicle-number-div")[0].classList.add("activeInput");
    document.getElementsByClassName("input-vehicle-number-div")[0].classList.remove("inactiveInput");
}



// vehicle number
const VRN = "^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$";
const vehicle_number = document.getElementById("vehicle-number");
vehicle_number.addEventListener("keyup", ({key, keyCode}) => {
        if(key  == 'enter' || keyCode == 13){
            if(vehicle_number.value.match(VRN)){
                //change display of vehicle number
                document.getElementsByClassName("input-vehicle-number-div")[0].classList.remove("activeInput");
                document.getElementsByClassName("input-vehicle-number-div")[0].classList.add("inactiveInput");
                //create custom label for employee id
                document.getElementById('vehicle-employee-id-label').innerHTML ="Hey ! Can I know your employee Id";
                //change display of vehicle employee id
                document.getElementsByClassName("input-employee-id-div")[0].classList.add("activeInput");
                document.getElementsByClassName("input-employee-id-div")[0].classList.remove("inactiveInput");
            }
            else{
                document.getElementById("vehicle-number").style.outlineColor = "#cc0000";
            }
        }
});

// employee id
const employee_id = document.getElementById("employee-id");
employee_id.addEventListener("keyup", ({key, keyCode}) => {
        if(key  == 'enter' || keyCode == 13){
          
            //change display of employee id
            document.getElementsByClassName("input-employee-id-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-employee-id-div")[0].classList.add("inactiveInput");
            //create custom label for identification mark
            document.getElementById('vehicle-identification-label').innerHTML ="Hey ! Can I know any identification mark(color, spots , etc.)";
            //change display of vehicle identification mark
            document.getElementsByClassName("input-vehicle-identification-div")[0].classList.add("activeInput");
            document.getElementsByClassName("input-vehicle-identification-div")[0].classList.remove("inactiveInput");
        }
});


// vehicle identification
const vehicle_identification = document.getElementById("vehicle-identification");
vehicle_identification.addEventListener("keyup", ({key, keyCode}) => {
        if(key  == 'enter' || keyCode == 13){
            
            //change display of vehicle identification
            document.getElementsByClassName("input-vehicle-identification-div")[0].classList.remove("activeInput");
            document.getElementsByClassName("input-vehicle-identification-div")[0].classList.add("inactiveInput");
            
            //change display of submit
            document.getElementsByClassName("input-submit-div")[1].classList.add("activeInput");
            document.getElementsByClassName("input-submit-div")[1].classList.remove("inactiveInput");
        }
});

//submit form
function SubmitVehicle(){
    vehicle.name = vehicle_name.value;
    vehicle.type = vehicle_type.value;
    vehicle.vehicleNumber = vehicle_number.value;
    vehicle.employeeId = employee_id.value;
    vehicle.indetificationArea = vehicle_identification.value;
    console.log(vehicle);
    //change display of submit button
    document.getElementsByClassName("input-submit-div")[1].classList.remove("activeInput");
    document.getElementsByClassName("input-submit-div")[1].classList.add("inactiveInput");
    const element = document.createElement('div');
    element.classList.add("selected-vehicle-type");
    element.appendChild(document.createTextNode(`You have vehicle type of ${vehicle.type}`));
    document.getElementById("vehicle-form").replaceChild(element,document.getElementsByClassName("input-vehicle-type-div")[0]);
    
    document.getElementsByClassName("selected-vehicle-type")[0].classList.add("activeInput");
    

    pricingDetails();
    document.getElementById("parking-pricing").classList.remove("invisible");
    // setTimeout(function(){

    // }, 500);
}



/* Pricing details for Pass */
const pass_price = {
    Cycle : {
        INR : {
            daily : "5",
            monthly : "100",
            yearly : "500"
        },
        USD :{
            daily : "0.068",
            monthly : "1.36",
            yearly : "6.82"
        },
        YEN : {
            daily: "7.55",
            monthly : "150.95" , 
            yearly : "754.73"
        }
    },
    MotorCycle : {
        INR : {
            daily : "10",
            monthly : "200",
            yearly : "1000"
        },
        USD :{
            daily : "0.14",
            monthly : "2.73",
            yearly : "13.65"
        },
        YEN : {
            daily: "15.10",
            monthly : "301.95" , 
            yearly : "1509.58"
        }
    },
    FourWheeler : {
        INR : {
            daily : "20",
            monthly : "500",
            yearly : "3500"
        },
        USD :{
            daily : "0.27",
            monthly : "6.82",
            yearly : "47.46"
        },
        YEN : {
            daily: "30.19",
            monthly : "754.73" , 
            yearly : "5283.52"
        }
    }      
};


// when currency type is changed , this function is called
let selectedCurrency = "INR";
function changeCurrency(){
    selectedCurrency = document.getElementById("currency-type").value;
    pricingDetails();
}

//function change text on html for currency value
function displayCurrency({daily, monthly, yearly}, symbol) {
    document.getElementById("daily-price").innerHTML = symbol+daily;
    document.getElementById("monthly-price").innerHTML = symbol+ monthly;
    document.getElementById("yearly-price").innerHTML = symbol+yearly;
}

// function for pricing details according to the type
function pricingDetails(){
    //if type  is cycle
    if(vehicle.type == "Cycle"){
        document.getElementById("vehicle-img").src = "images/cycle.svg";
        if(selectedCurrency =="INR"){
            displayCurrency(pass_price.Cycle.INR ,"&#8377;");
        }
        else if (selectedCurrency == "USD") {
            displayCurrency(pass_price.Cycle.USD, "$");
        }
        else if (selectedCurrency == "YEN" ) {
            displayCurrency(pass_price.Cycle.YEN,"&#165;");
        }
    }
    else    
    //if type is motorcycle 
    if(vehicle.type == "MotorCycle"){
        document.getElementById("vehicle-img").src = "images/motorcycle.svg";
        if(selectedCurrency=="INR"){
            displayCurrency(pass_price.MotorCycle.INR,"&#8377;");
        }
        else if (selectedCurrency == "USD") {
            displayCurrency(pass_price.MotorCycle.USD, "$");
        }
        else if (selectedCurrency=="YEN") {
            displayCurrency(pass_price.MotorCycle.YEN,"&#165;");
        }
    }
    else     
    if(vehicle.type == "FourWheeler"){
        
        if(selectedCurrency == "INR"){
            displayCurrency(pass_price.FourWheeler.INR,"&#8377;");
        }
        else if (selectedCurrency == "USD") {
            displayCurrency(pass_price.FourWheeler.USD, "$");
        }
        else if (selectedCurrency == "YEN") {
            displayCurrency(pass_price.FourWheeler.YEN,"&#165;");
        }
    }
}

//display price in USD
function displayPass(type,period, price){

    const element = document.createElement('div');
    element.classList.add("pass-details", "pass-box");
    //heading 
    const heading = document.createElement('h3');
    heading.appendChild(document.createTextNode(`Selected pass plan for your ${type}`)); 
    element.appendChild(heading);
    //price circle
    const price_circle = document.createElement('div');
    price_circle.classList.add("pass-price-circle");
    //subheading inside circle
    const subheading = document.createElement('h1');
    subheading.appendChild(document.createTextNode(`$${price}`)); 
    price_circle.appendChild(subheading);
    //period text inside circle
    const par = document.createElement('p');
    par.appendChild(document.createTextNode(`/${period}`));
    price_circle.appendChild(par);

    element.appendChild(price_circle);

    //adding pricecircle in div
    document.getElementById('parking-pricing').replaceChild(element,
        document.getElementsByClassName("pricing-container")[0]);
    document.getElementsByClassName("currency-div")[0].classList.add("inactiveInput");

}
//get pass
function getPass(){
    const period = this.event.target.classList.value;

    
    if(vehicle.type == "Cycle"){
       
        if(period.includes("day")){
        
            displayPass(vehicle.type,"day", pass_price.Cycle.USD.daily);
        }
        else if(period.includes("month")){
            
            displayPass(vehicle.type,"month", pass_price.Cycle.USD.monthly);
        }
        else if(period.includes("year")){
            
            displayPass(vehicle.type,"year", pass_price.Cycle.USD.yearly);
        }
    }
    else     
    if(vehicle.type == "MotorCycle"){
        if(period.includes("day")){
            displayPass(vehicle.type,"day", pass_price.MotorCycle.USD.daily);
        }
        else if(period.includes("month")){
            displayPass(vehicle.type,"month", pass_price.MotorCycle.USD.monthly);
        }
        else if(period.includes("year")){
            displayPass(vehicle.type,"year", pass_price.MotorCycle.USD.yearly);
        }
    }
    else
    if(vehicle.type == "FourWheeler"){
        if(period.includes("day")){
            displayPass(vehicle.type,"day", pass_price.FourWheeler.USD.daily);
        }
        else if(period.includes("month")){
            displayPass(vehicle.type,"month", pass_price.FourWheeler.USD.monthly);
        }
        else if(period.includes("year")){
            displayPass(vehicle.type,"year", pass_price.FourWheeler.USD.yearly);
        }
    }

}
