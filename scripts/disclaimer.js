fetch("/components/disclaimer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("disclaimer").innerHTML = document.getElementById("disclaimer").innerHTML + data;
  });
