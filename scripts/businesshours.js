fetch("/components/businesshours.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("businesshours").innerHTML = document.getElementById("businesshours").innerHTML + data;
  });
