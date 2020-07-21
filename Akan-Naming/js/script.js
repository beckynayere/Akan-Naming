
let dob = document.getElementById("birthDate")


     function rightAnswer() {
      response.innerHTML = ""

  

function rightAnswer() {
  response.innerHTML = ""
  
}

function akanName() {
  validDate()
}

//validity

//date validity
function validDate() {

  let d = newDate(dob.value).getDate();
  let m = newMonth(dob.value).getMonth() + 1;//var n = month[d.getMonth()];
  let y = newYear(dob.value).getFullYear();

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

  let dayOfTheWeek = newDate(dob).getDay()
}

for (let i = 0, length = gender.length; i < length; i++) {
  if (gender[i].checked) {

    if (gender[i].value == 'male') {
      var field = form.elements[i]
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
 if (field.type === 'select') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push({
					name: field.name,
					value: field.options[n].value
				});
			}
		}

		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			serialized.push({
				name: field.name,
				value: field.value
			});
		}
    }
    
    return serialized;

};

var form = document.querySelector('#form-data');

var data = serializeArray(form)

day = new Date(data[0]['value']).getDay()

akanName = ""

if(data[1]['value'] === 'female'){
    for(let i = 0; i<female.length; i++){
        if(day === i) {
            akanName = female[i]
            document.getElementById("akanName").innerHTML = akanName

        }
    }

}else if(data[1]['value'] === 'male'){
    for(let i = 0; i<male.length; i++){
        if(day === i) {
            akanName = male[i]
            document.getElementById("akanName").innerHTML = akanName
        }

  if (dayOfTheWeek === 0) {
    response.innerHTML  = "Kwasi"
  }
  else if (dayOfTheWeek === 1) {

    response.innerHTML = "kwando"
  }
  else if (dayOfTheWeek === 2) {

    response.iinnerHTML  = "kwabena"
  }
  else if (dayOfTheWeek == 3) {

    response.innerHTML = "kwaku"
  }
  else if (dayOfTheWeek == 4) {

    response.innerHTML  = "yaw"
  }
  else if (dayOfTheWeek == 5) {

    response.innerHTML = "koffi"

  }
  else {

    response.innerHTML  = "kwame"
  }
}

    } else {
  if (dayOfTheWeek === 0){
      response.innerHTML= "akosua"
    }
    else if (dayOfTheWeek === 1) {

      response.innerHTML = "aduoa"
    }
    else if (dayOfTheWeek === 2) {

      response.innerHTML = "abenaa"
    }
    else if (dayOfTheWeek === 3) {

      response.innerHTML  = "akua"
    }
    else if (dayOfTheWeek === 4) {

      response.innerHTML  = "yaa"
    }
    else if (dayOfTheWeek === 5) {
      response.innerHTML = "afua"
    }
    else {
      response.innerHTML= "ama"
    }
  }
}
  
//else {
  alert("Re-enter your Gender");


}

  alert(name)
  response.iinnerHTML = giveName;
  //element4.innerText = day;



[i] (gender)
let gender = document.getElementsByName("gender")
let response = document.getElementsById("response")


document.getElementById="dob"
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


