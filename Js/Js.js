navbar = document.querySelector(".navbar").querySelectorAll("a");
// console.log(navbar)
let Contact = document.getElementById("Contact")
navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active")
    })
});

let Day = new Date();
const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let Month = Months[Day.getMonth()];
let DayOfMonth = Day.getDate();
let TomorrowDayOfWeek = new Date(Day);
TomorrowDayOfWeek.setDate(Day.getDate() + 1);
let AfterTomorrowDayOfWeek = new Date(TomorrowDayOfWeek);
AfterTomorrowDayOfWeek.setDate(TomorrowDayOfWeek.getDate() + 1);

const TodayDay = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"][Day.getDay()];
const TomorrowDay = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"][TomorrowDayOfWeek.getDay()];
const AfterTomorrowDays = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"][AfterTomorrowDayOfWeek.getDay()];

// console.log(TodayDay);
// console.log(TomorrowDay);
// console.log(AfterTomorrowDays);




let TodayDegree = document.getElementById("TodayDegreeNum");
let DayOfWeekk = document.getElementById("DayOfWeek");
let TodayWeatherIcon = document.getElementById("TodayWeatherIcon");
let TodayDate = document.getElementById("todayDate");
let Country = document.getElementById("country");
let el7alaNow = document.getElementById("el7alaNow")
let TomorrowDayOfWeekk = document.getElementById("TomorrowDayOfWeek");
let AfterTomorrowDayOfWeekk = document.getElementById("AfterTomorrowDayOfWeek");

let TomorrowWeatherIcon = document.getElementById("TomorrowWeatherIcon");
let el7alaTomorrow = document.getElementById("el7alaTomorrow");
let MaxTomorrowDegree = document.getElementById("MaxTomorrowDegree");
let MinTomorrowDegree = document.getElementById("MinTomorrowDegree");

let AfterTomorrowWeatherIcon = document.getElementById("AfterTomorrowWeatherIcon");
let MaxAfterTomorrowDegree = document.getElementById("MaxAfterTomorrowDegree");
let MinAfterTomorrowDegree = document.getElementById("MinAfterTomorrowDegree");
let el7alaAfterTomorrow = document.getElementById("el7alaAfterTomorrow");

let LocationSearchValue = document.getElementById("LocationSearch");
let SearchBtn = document.getElementById("Submit");

// function LocationSearch(){
//     console.log(LocationSearchValue.value)
// }

// let form = document.getElementById("SearchForm");
// let formdata = new FormData(form);

// let LocationSearch = formdata.get("LocationSearch")

// let LocationSearch = document.getElementById("LocationSearch");
// let LocationSearchValue = LocationSearch.value
// console.log(LocationSearchValue);

SearchBtn.addEventListener("click", function(){
    console.log(LocationSearchValue.value)
    localStorage.setItem("LocationSearchValue",JSON.stringify(LocationSearchValue.value));
    location.reload();
})


async function  getWether7(){
    if(localStorage.getItem("LocationSearchValue") == null){
        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=beb8e8d4b296465f8cb121754232912&q=Cairo&days=7`)
        let finalRes = await res.json()
        // console.log(finalRes.forecast.forecastday[1].day.mintemp_c);
        Country.innerHTML=`${finalRes.location.name}`
        TodayDate.innerHTML=`${DayOfMonth}${Month}`
        DayOfWeekk.innerHTML=`${TodayDay}`
        TodayDegree.innerHTML=`${finalRes.current.temp_c}<sup style="top: -0.5em;">o</sup>C`
        TodayWeatherIcon.innerHTML=`<img src="${finalRes.current.condition.icon}" alt="" width="90" style="margin-top: 20px;"/>`
        el7alaNow.innerHTML=`${finalRes.current.condition.text}`
        TomorrowDayOfWeekk.innerHTML=`${TomorrowDay}`
        AfterTomorrowDayOfWeekk.innerHTML=`${AfterTomorrowDays}`

        TomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[1].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
        el7alaTomorrow.innerHTML=`${finalRes.forecast.forecastday[1].day.condition.text}`
        MaxTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
        MinTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`

        AfterTomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[2].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
        el7alaAfterTomorrow.innerHTML=`${finalRes.forecast.forecastday[2].day.condition.text}`
        MaxAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
        MinAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`
    } else{
        let localStorageVar = JSON.parse(localStorage.getItem("LocationSearchValue"));
        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=beb8e8d4b296465f8cb121754232912&q=${localStorageVar}&days=7`)
        let finalRes = await res.json()
        // console.log(finalRes.forecast.forecastday[1].day.mintemp_c);
        Country.innerHTML=`${finalRes.location.name}`
        TodayDate.innerHTML=`${DayOfMonth}${Month}`
        DayOfWeekk.innerHTML=`${TodayDay}`
        TodayDegree.innerHTML=`${finalRes.current.temp_c}<sup style="top: -0.5em;">o</sup>C`
        TodayWeatherIcon.innerHTML=`<img src="${finalRes.current.condition.icon}" alt="" width="90" style="margin-top: 20px;"/>`
        el7alaNow.innerHTML=`${finalRes.current.condition.text}`
        TomorrowDayOfWeekk.innerHTML=`${TomorrowDay}`
        AfterTomorrowDayOfWeekk.innerHTML=`${AfterTomorrowDays}`

        TomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[1].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
        el7alaTomorrow.innerHTML=`${finalRes.forecast.forecastday[1].day.condition.text}`
        MaxTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
        MinTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`

        AfterTomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[2].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
        el7alaAfterTomorrow.innerHTML=`${finalRes.forecast.forecastday[2].day.condition.text}`
        MaxAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
        MinAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`
    }
    // // let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=beb8e8d4b296465f8cb121754232912&q=Cairo&days=7`)
    // let finalRes = await res.json()
    // // console.log(finalRes.forecast.forecastday[1].day.mintemp_c);
    // Country.innerHTML=`${finalRes.location.name}`
    // TodayDate.innerHTML=`${DayOfMonth}${Month}`
    // DayOfWeekk.innerHTML=`${TodayDay}`
    // TodayDegree.innerHTML=`${finalRes.current.temp_c}<sup style="top: -0.5em;">o</sup>C`
    // TodayWeatherIcon.innerHTML=`<img src="${finalRes.current.condition.icon}" alt="" width="90" style="margin-top: 20px;"/>`
    // el7alaNow.innerHTML=`${finalRes.current.condition.text}`
    // TomorrowDayOfWeekk.innerHTML=`${TomorrowDay}`
    // AfterTomorrowDayOfWeekk.innerHTML=`${AfterTomorrowDays}`

    // TomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[1].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
    // el7alaTomorrow.innerHTML=`${finalRes.forecast.forecastday[1].day.condition.text}`
    // MaxTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
    // MinTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[1].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`

    // AfterTomorrowWeatherIcon.innerHTML=`<img src="${finalRes.forecast.forecastday[2].day.condition.icon}" alt="" width="48" style="margin-top: 20px;"/>`
    // el7alaAfterTomorrow.innerHTML=`${finalRes.forecast.forecastday[2].day.condition.text}`
    // MaxAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.maxtemp_c}<sup style="top: -0.5em;">o</sup>C`
    // MinAfterTomorrowDegree.innerHTML=`${finalRes.forecast.forecastday[2].day.mintemp_c}<sup style="top: -0.5em;">o</sup>`
}
getWether7();