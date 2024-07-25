// select input elements elements
// day input element
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// age elements
const ageInDays = document.getElementById("age-in-days");
const ageInMonths = document.getElementById("age-in-months");
const ageInYears = document.getElementById("age-in-years");

// error element 
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");

// submit button
const submitButton = document.getElementById("submit-button");
const form = document.querySelector("form");

// current year
const currentYear = new Date().getFullYear;

// add eventListener to submit button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(day.value , month.value, year.value, currentYear);
     let dayInput = day.value;
     let monthInput = month.value;
     let yearInput = year.value;

   if(!dayInput) {
    dayError.style.visibility = "visible"; 
    ageInDays.textContent = "--";
    ageInMonths.textContent = "--";
    ageInYears.textContent = "--";
   }
   
   if(dayInput) {
     if(dayInput < 0 || dayInput === 0 ) {
        dayError.style.visibility = "visible";
        dayError.textContent = "enter correct day";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";

     }

   }

   if(!monthInput) {
        monthError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";

   }

   if(month) {
        if(month < 0 || month === 0 || month > 12) {
            monthError.style.visibility = "visible";
            monthError.textContent = "incorrect month";
            ageInDays.textContent = "--";
            ageInMonths.textContent = "--";
            ageInYears.textContent = "--";
        }
   }

   if(!yearInput) {
        yearError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
   }

   if(yearInput) {
        if(yearInput < 0 || yearInput > currentYear) {
            yearError.style.visibility = "visible";
            yearError.textContent = "Incorrect year";

            ageInDays.textContent = "--";
            ageInMonths.textContent = "--";
            ageInYears.textContent = "--";

        }
   }


  
});