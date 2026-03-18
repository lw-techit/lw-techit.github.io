fetch("/components/contact.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("contact").innerHTML = document.getElementById("contact").innerHTML + data;
  });
