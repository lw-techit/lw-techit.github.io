fetch("/components/principal.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("principal").innerHTML = document.getElementById("principal").innerHTML + data;
  });
