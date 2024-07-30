// select input elements elements
// day input element
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// age elements
let ageInDays = document.getElementById("age-in-days");
let ageInMonths = document.getElementById("age-in-months");
let ageInYears = document.getElementById("age-in-years");

// error element 
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");


// select all input elements
day.addEventListener("click", () => {
    dayError.style.visibility = "hidden";
    
});

month.addEventListener("click", () => {
    monthError.style.visibility = "hidden";
});

year.addEventListener("click", () => {
    yearError.style.visibility = "hidden";
});

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

   if(!dayInput || isNaN(dayInput)) {
        dayError.style.visibility = "visible"; 
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
   }
   
   if(dayInput) {
     if(dayInput < 0 || dayInput === 0 ) {
        dayError.style.visibility = "visible";
        dayError.textContent = "enter correct day";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
     }

     if(monthInput === 2  ) {
        if(leapYear) {
            if(dayInput > 28 || dayInput === 0  || dayInput < 0) {
                dayError.style.visibility = "visible";
                dayError.textContent = "invalid entry";
                ageInDays.textContent = "--";
                ageInMonths.textContent = "--";
                ageInYears.textContent = "--";
                return;
            }
        } else {
            if(dayInput > 29 || dayInput === 0 || dayInput < 0) {
                dayError.style.visibility = "visible";
                dayError.textContent = "February has 28 days in a leap year";
                ageInDays.textContent = "--";
                ageInMonths.textContent = "--";
                ageInYears.textContent = "--";
                return;
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
            return;
        }
     }

     if(monthInput !== 2 && monthInput !== 4 && monthInput !== 9) {
        if(dayInput > 31 || dayInput < 0 || dayInput === 0) {
            dayError.style.visibility = "visible";
            dayError.textContent = "enter correct day";
            ageInDays.textContent = "--";
            ageInMonths.textContent = "--";
            ageInYears.textContent = "--";
            return;
        }
     }
   }

   if(!monthInput || isNaN(monthInput)) {
        monthError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
   }

  
    if(monthInput < 0 || monthInput > 12) {
        monthError.style.visibility = "visible";
        monthError.textContent = "incorrect month";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
    }
   

   if(!yearInput || isNaN(yearInput)) {
        yearError.style.visibility = "visible";
        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
   }

    if(yearInput < 0 || yearInput > currentYear) {
        yearError.style.visibility = "visible";
        yearError.textContent = "birth year cant be future";

        ageInDays.textContent = "--";
        ageInMonths.textContent = "--";
        ageInYears.textContent = "--";
        return;
    }

    // bith year
    let birthDate = new Date(`${dayInput}/${monthInput}/${yearInput}`);
    console.log(birthDate);


    const currentDate = new Date();
    const formattedLocalDate = currentDate.toLocaleDateString();
    // const formattedInSpecifiedFormat = currentDate.toLocaleDateString(&quot;hi-IN&quot;);
    console.log(formattedLocalDate);

    // differnce in time
    let timeDifference = currentDate.getTime() - birthDate.getTime();
    console.log(timeDifference);

    // difference in Days
    let differenceInDays = Math.round(timeDifference / (1000 * 3600 * 24));
    console.log("total number of days is : " + differenceInDays + "days");

    // convert days into years, months and days
    let calcAgeInYears = Math.floor(differenceInDays/365);
    let calcAgeInMonths = Math.floor(differenceInDays % 365 / 30);
    let calcAgeInDays = Math.floor(differenceInDays % 365 % 30);


    console.log(`${calcAgeInYears} years , ${calcAgeInMonths} months, ${calcAgeInDays} days`);
    
    // show in the ui
    ageInDays.textContent = calcAgeInDays;
    ageInMonths.textContent = calcAgeInMonths;
    ageInYears.textContent = calcAgeInYears;
    

    // reset input fields
    day.value = null;
    month.value = null;
    year.value = null;
});