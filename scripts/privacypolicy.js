fetch("/components/privacypolicy.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("privacypolicy").innerHTML = document.getElementById("privacypolicy").innerHTML + data;
  });
