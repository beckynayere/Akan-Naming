
let DoB = document.getElementById("birthDate")

//var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function rightAnswer() {
  response.innerText = ""
}

function akanName() {
  validDate()
}

//validity


//date validity
function validDate() {

  let d = newDate(DoB.value).getDate();
  let m = newMonth(DoB.value).getMonth() + 1;//var n = month[d.getMonth()];
  let y = newYear(DoB.value).getYear();

  if (d <= 0 || d > 31) {
    alert('enter a valid day of the week')
  } else if (m <= 0 || m > 12) {
    alert('enter a valid month')
  } else if (y > new date().getYear()) {
    alert('enter a valid year')
  } else {
    giveName()
  }
}
//akan naming

function giveName() {
  let gender = document.getElementsByName("gender")
  let response = document.getElementsById("response")

  let dayOfTheWeek = newDate(DoB).getDay()
}

for (let i = 0, length = gender.length; i < length; i++) {
  if (gender[i].checked) {


    if (gender[i].value == 'male') {
      
if (gender == "male" || gender == 'Male') {
  console.log("male running")

  if (dayOfTheWeek == 0) {
    response.innerText = "Kwasi"
  }
  else if (dayOfTheWeek == 1) {

    response.innerText = "kwando"
  }
  else if (dayOfTheWeek == 2) {

    response.innerText = "kwabena"
  }
  else if (dayOfTheWeek == 3) {

    response.innerText = "kwaku"
  }
  else if (dayOfTheWeek == 4) {

    response.innerText = "yaw"
  }
  else if (dayOfTheWeek == 5) {

    response.innerText = "koffi"

  }
  else {

    response.innerText = "kwame"
  }
}

    } else {
  if (gender === "female" || gender == "Female") {
    if (dayOfTheWeek == 0) {

      response.innerText = "akosua"
    }
    else if (dayOfTheWeek == 1) {

      response.innerText = "aduoa"
    }
    else if (dayOfTheWeek == 2) {

      response.innerText = "abenaa"
    }
    else if (dayOfTheWeek == 3) {

      response.innerText = "akua"
    }
    else if (dayOfTheWeek == 4) {

      response.innerText = "yaa"
    }
    else if (dayOfTheWeek == 5) {
      response.innerText = "afua"
    }
    else {
      response.innerText = "ama"
    }
  }






  //var element3 = document.getElementById(3);
  //var element4 = document.getElementById(4);
  //let gender = prompt("Gender")
  //if (gender == ! "male" || gender == ! "female") {
  //      alert("invalid gender")
  //gender = prompt("Re-enter Gender")
  //}

  //if (Dte > 31 || Dte <= 0) {
  //alert("invalid Date")
  //Dte = prompt("re-enter Date")
  //} else if (Dte == null) {
  //alert("fill date")
  //}
  //let Month = prompt("Month")
  //if (Month > 12 || Month <= 0) {
  //      alert("invalid Month")
  //Month = prompt("re-enter Month")
  //}
  //var Year = prompt("Year")

  //if (Year <= 0) {
  //      alert("invalid Date")
  //Year = prompt("re-enter Year")
  //}
  //var DoB = Month + " " + Dte + " ," + Year
  //alert(DoB)

  //this is how you get the day
  //var dt = new Date(DoB + " " + "00:15:00");
  //

  //var dayOfTheWeek = dt.getDay()
  //console.log("dayOfTheWeek", dayOfTheWeek)
  //console.log("mygender", gender)

  //function kk(gender) {
  //      console.log("qqqqqqqqqqqqmygender", gender)
  //let name = ""
  //let day = ""



























}
        else if (dayOfTheWeek == '5') {
  name = "afua"
  day = "friday"
} else if (dayOfTheWeek == '6') {
  name = "amua"
  day = "saturday"
}
      }
      else {
  alert("Re-enter your Gender");

}

alert(name)
element3.innerText = name;
element4.innerText = day;
    }
kk(gender)

var element = document.getElementById(1);
var element2 = document.getElementById(2);


element.innerText = gender;
element2.innerText = DoB;

