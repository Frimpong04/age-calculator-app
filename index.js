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
const currentYear = new Date().getFullYear();





// add eventListener to submit button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(day.value , month.value, year.value, currentYear);
    console.log(currentYear)

    let dayInput = Number(day.value);
    let monthInput = Number(month.value);
    let yearInput = Number(year.value);

    let leapYear = yearInput % 4 === 0 ? true : false ;
    console.log(leapYear);

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

     if(monthInput === 2  ) {
        if(leapYear) {
            if(dayInput > 28 || dayInput === 0  || dayInput < 0) {
                dayError.style.visibility = "visible";
                dayError.textContent = "February has 28 days in a leap year";
                ageInDays.textContent = "--";
                ageInMonths.textContent = "--";
                ageInYears.textContent = "--";
            }
        } else {
            if(dayInput > 29 || dayInput === 0 || dayInput < 0) {
                dayError.style.visibility = "visible";
                dayError.textContent = "February has 28 days in a leap year";
                ageInDays.textContent = "--";
                ageInMonths.textContent = "--";
                ageInYears.textContent = "--";
            }
        }
       
     }

     if(monthInput === 4 || monthInput === 9) {
        if(dayInput > 30) {
            dayError.style.visibility = "visible";
            dayError.textContent = "enter correct day";
            ageInDays.textContent = "--";
            ageInMonths.textContent = "--";
            ageInYears.textContent = "--";
        }
     }

     if(monthInput !== 2 && monthInput !== 4 && monthInput !== 9) {
        if(dayInput > 31 || dayInput < 0 || dayInput === 0) {
            dayError.style.visibility = "visible";
            dayError.textContent = "enter correct day";
            ageInDays.textContent = "--";
            ageInMonths.textContent = "--";
            ageInYears.textContent = "--";
        }
     }
   }

   if(!monthInput) {
        monthError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";

   }

  
    if(monthInput < 0 || monthInput > 12) {
        monthError.style.visibility = "visible";
        monthError.textContent = "incorrect month";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
    }
   

   if(!yearInput) {
        yearError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
   }

    if(yearInput < 0 || yearInput > currentYear) {
        yearError.style.visibility = "visible";
        yearError.textContent = "birth year cant be future";

        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
    }


  
});