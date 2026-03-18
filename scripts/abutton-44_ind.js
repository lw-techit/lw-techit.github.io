fetch("/components/abutton-44_ind.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("abutton-44_ind").innerHTML = document.getElementById("abutton-44_ind").innerHTML + data;
  });
