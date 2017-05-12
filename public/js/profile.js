$(document).ready(function() {

  console.log("page is ready");
  
  var emailParam;
  var profileLocation;

  var fullName = $("#fullName");
  var userEmail = $("#email");
  var photoURL = $("#photoURL");
  var state = $("#state");
  var city = $("#city");
  var zipCode= $('#zipCode');
  var age = $("#age");
  var phone = $("#phone");
  var gender = $("#gender");
  var school = $("#school");
  var aos = $("#aos");
  var study = $("#study");

  function getQueryVariable(variable)
    {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    emailParam = decodeURIComponent(getQueryVariable("email"));
    console.log("emailParam: "+ emailParam);

  // Getting buddy data by email
  getcurrentUser(emailParam);

  //get buddy by email
  function getcurrentUser(email) {
    
    $.get("/api/buddies/" + email, function(data) {
        if (data === false) {
            return "No buddy found!";
        }
        else {
            console.log("profile data: " + data);
            fullName.html(data.firstName + " " + data.lastName);
            userEmail.html(data.email);
            $('#profilePhoto').html("<img src='"+ data.photoURL +"' style='width:200px;'>");
            state.html(data.state);
            city.html(data.city);
            zipCode.html(data.zipcode);
            age.html(data.age);
            phone.html(data.phoneNumber);
            gender.html(data.gender.toUpperCase());
            school.html(data.school);
            aos.html(data.aos);
            study.html(data.study_subject);
        }
    })
  }

	function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

});



