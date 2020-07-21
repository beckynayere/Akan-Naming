
let DoB = document.getElementById("birthDate")

//let d = prompt("Date")
//if(d > 31 || Dte <= 0){
  //alert("invalid Date")
  //Dte = prompt("re-enter Date")
//}else if(d ==null ){
  //alert("fill date")
//}
  // let m = prompt("Month")
   //if(m > 12 || m <= 0){
  //alert("invalid Month")
    // Month = prompt("re-enter Month")
//}
  // let y = prompt("FullYear")

   //if( y <= 0){
  //alert("invalid Date")
    // Year = prompt("re-enter Year")
//}
  // var DoB  = m + " "+ d + " ," + y
   //alert("DoB")

   //this is how you get the day
    //var d = new Date( DoB + " " + "00:15:00");
   //

   //var dayOfTheWeek =  d.getDay()
   //console.log("dayOfTheWeek",dayOfTheWeek)
   //console.log("gender",gender)

   //function kk(gender) {
     //console.log("qqqqqqqqqqqqmygender",gender)

     //let akanName= ""
     //let dayOfTheWeek = ""
     

   }

     function rightAnswer() {
      response.innerHTML = ""

    if (gender == "male" || gender == 'Male') {
     console.log("male running")


function rightAnswer() {
  response.innerHTML = ""
  
}

function akanName() {
  validDate()
}

//validity


//date validity
function validDate() {

  let d = newDate(DoB.value).getDate();
  let m = newMonth(DoB.value).getMonth() + 1;//var n = month[d.getMonth()];
  let y = newYear(DoB.value).getFullYear();

  if (d <= 0 || d > 31) {
    alert('enter a valid day of the week')
  } else if (m <= 0 || m > 12) {
    alert('enter a valid month')
  } else if (y > new date().getFullYear()) {
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

  if (dayOfTheWeek == '0') {
    response.innerHTML  = "Kwasi"
  }
  else if (dayOfTheWeek == '1') {

    response.innerHTML = "kwando"
  }
  else if (dayOfTheWeek == '2') {

    response.iinnerHTML  = "kwabena"
  }
  else if (dayOfTheWeek == '3') {

    response.innerHTML = "kwaku"
  }
  else if (dayOfTheWeek == '4') {

    response.innerHTML  = "yaw"
  }
  else if (dayOfTheWeek == '5') {

    response.innerHTML = "koffi"

  }
  else {

    response.innerHTML  = "kwame"
  }
}

    } else {
  if (gender === "female" || gender == "Female") {
    if (dayOfTheWeek == 0) {

      response.innerHTML= "akosua"
    }
    else if (dayOfTheWeek == 1) {

      response.innerHTML = "aduoa"
    }
    else if (dayOfTheWeek == 2) {

      response.innerHTML = "abenaa"
    }
    else if (dayOfTheWeek == 3) {

      response.innerHTML  = "akua"
    }
    else if (dayOfTheWeek == 4) {

      response.innerHTML  = "yaa"
    }
    else if (dayOfTheWeek == 5) {
      response.innerHTML = "afua"
    }
    else {
      response.innerHTML= "ama"
    }
  }
  else{
    alert("Re-enter your Gender");


  }

    alert(name)
    response.iinnerHTML = name;
    //element4.innerText = day;
}
  kk(gender)
  let gender = document.getElementsByName("gender")
  let response = document.getElementsById("response")

 
  document.getElementById="DoB"
  document.getElementsByName="gender"
  document.getElementsById="response"
 







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



























