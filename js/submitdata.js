function submitData() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let college = document.getElementById("college").value;
  let contact = document.getElementById("contact").value;
  let description = document.getElementById("description").value;
  let interest = document.getElementById("interest").value;
  document.getElementById("submitbtn").innerHTML = "Loading...";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    firstName: firstname,
    lastName: lastname,
    college: college,
    email: email,
    contact: contact,
    internshipField: interest,
    DescriptionAboutYourself: description,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://intershipserver.herokuapp.com/api/addData", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("myform").reset();
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      document.getElementById("submitbtn").innerHTML = "submit";
    })
    .catch((error) => {
      console.log("error", error);
      document.getElementById("submitbtn").innerHTML = "submit";
    });
}

function validatefirstname() {
  let firstname = document.getElementById("firstname").value;
  if (!firstname) {
    document.getElementById("firstname").style.borderColor = "red";
    document.getElementById("fname").innerHTML = "* Field can not be empty";
  } else {
    document.getElementById("firstname").style.borderColor = "green";
    document.getElementById("fname").innerHTML = "";
  }
}

function validatelastname() {
  let lastname = document.getElementById("lastname").value;
  if (!lastname) {
    document.getElementById("lastname").style.borderColor = "red";
    document.getElementById("lname").innerHTML = " * Field can not be empty";
  } else {
    document.getElementById("lastname").style.borderColor = "green";
    document.getElementById("lname").innerHTML = "";
  }
}
function validateemail() {
  let email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("ema").innerHTML = " * Field can not be empty";
  } else {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    ) {
      document.getElementById("email").style.borderColor = "green";
      document.getElementById("ema").innerHTML = "";
    } else {
      document.getElementById("ema").innerHTML = "* Incorrect Email ID";
      document.getElementById("email").style.borderColor = "red";
    }
  }
}
function validatecontact() {
  let contact = document.getElementById("contact").value;
  if (!contact) {
    document.getElementById("contact").style.borderColor = "red";
    document.getElementById("con").innerHTML = "* Field Can not be empty";
  } else {
    var phoneno = /^\d{10}$/;
    if (phoneno.test(contact)) {
      document.getElementById("contact").style.borderColor = "green";
      document.getElementById("con").innerHTML = "";
    } else {
      document.getElementById("contact").style.borderColor = "red";
      document.getElementById("con").innerHTML = "Incorrect Phone Number";
    }
  }
}
function validatecollege() {
  let college = document.getElementById("college").value;
  if (!college) {
    document.getElementById("college").style.borderColor = "red";
    document.getElementById("col").innerHTML = " * Field can not be empty";
  } else {
    document.getElementById("college").style.borderColor = "green";
    document.getElementById("col").innerHTML = "";
  }
}
function validatedescription() {
  let description = document.getElementById("description").value;
  if (!description) {
    document.getElementById("description").style.borderColor = "red";
    document.getElementById("desc").innerHTML = " * Field can not be empty";
  } else {
    document.getElementById("description").style.borderColor = "green";
    document.getElementById("desc").innerHTML = "";
  }
}
