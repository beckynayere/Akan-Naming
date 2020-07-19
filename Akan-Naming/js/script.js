

<table class="table">
    <thead>
        <tr>
            <th><abbr title="gender">Gender</abbr></th>

            <th><abbr title="Date of Birth">DoB</abbr></th>
            <th><abbr title="name">Akana name</abbr></th>
            <th><abbr title="day of the week">Day</abbr></th>


        </tr>
    </thead>
    <tfoot>
        <tr>
            <th><abbr title="gender">Gender</abbr></th>

            <th><abbr title="Date of Birth">DoB</abbr></th>
            <th><abbr title="name">Akana name</abbr></th>
            <th><abbr title="day of the week">Day</abbr></th>

        </tr>
    </tfoot>
    <tbody>
        <tr>

            <td id="1">38</td>
            <td id="2">23</td>
            <td id="3">12</td>
            <td id="4">3</td>


        </tr>
    </tbody>
</table>


    /*<script type="text/javascript">*/
        var element3 = document.getElementById(3);
        var element4 = document.getElementById(4);
        let gender = prompt("Gender")
    if (gender == ! "male" || gender == ! "female") {
            alert("invalid gender")
      gender = prompt("Re-enter Gender")
    }

    let Dte = prompt("Date")
    if (Dte > 31 || Dte <= 0) {
            alert("invalid Date")
      Dte = prompt("re-enter Date")
    } else if (Dte == null) {
            alert("fill date")
        }
    let Month = prompt("Month")
    if (Month > 12 || Month <= 0) {
            alert("invalid Month")
      Month = prompt("re-enter Month")
    }
    var Year = prompt("Year")

    if (Year <= 0) {
            alert("invalid Date")
      Year = prompt("re-enter Year")
    }
    var DoB = Month + " " + Dte + " ," + Year
    alert(DoB)

    //this is how you get the day
    var dt = new Date(DoB + " " + "00:15:00");
    //

    var dayOfTheWeek = dt.getDay()
    console.log("dayOfTheWeek", dayOfTheWeek)
    console.log("mygender", gender)

    function kk(gender) {
            console.log("qqqqqqqqqqqqmygender", gender)
      let name = ""
      let day = ""


      if (gender == "male" || gender == 'Male') {
            console.log("male running")

        if (dayOfTheWeek == "0") {
            name = "kwasi"
          day = "sunday"
        }
        else if (dayOfTheWeek == '1') {
            name = "Kwando"
          day = "monday"
        }
        else if (dayOfTheWeek == '2') {
            name = "Kwabena"
          day = "tuesday"
        }
        else if (dayOfTheWeek == '3') {
            name = "kwaku"
          day = "wednesday"
        }
        else if (dayOfTheWeek == '4') {
            name = "yaw"
          day = "thursday"
        }
        else if (dayOfTheWeek == '5') {
            name = "koffi"
          day = "friday"
        } else if (dayOfTheWeek == '6') {
            name = "kwame"
          day = "saturday"
        }
      }



      else if (gender === "female" || gender == "Female") {
        if (dayOfTheWeek == '0') {
            name = "akosua"
          day = "sunday"
        }
        else if (dayOfTheWeek == '1') {
            name = "aduoa"
          day = "monday"
        }
        else if (dayOfTheWeek == '2') {
            name = "abenaa"
          day = "tuesday"
        }
        else if (dayOfTheWeek == '3') {
            name = "akua"
          day = "wednesday"
        }
        else if (dayOfTheWeek == '4') {
            name = "yaa"
          day = "thursday"
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

 