function book() {
  var name= document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var service= document.getElementById("service").value;
  var date= document.getElementById("date").value;
  var time= document.getElementById("time").value; 
  if (name==="" || email==="" || date==="" || time==="") {
    alert("Please fill in the necessary information before proceeding!")
  } else {
  alert("Congratulations" + name + "!" + " You have successfully booked a " + service + " appointment with Haba KiBarber on " + date + ", at exactly " + time + "." + "We are glad that you chose us and we promise to provide the best service possible. Thank you!")
  }
}