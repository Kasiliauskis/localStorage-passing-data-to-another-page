function passvalues() {
  var firstname = document.getElementById("txt").value;
  localStorage.setItem("textvalue", firstname);
  return false;
}

document.getElementById("result").innerHTML = localStorage.getItem("textvalue");
