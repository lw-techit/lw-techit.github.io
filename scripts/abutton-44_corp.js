fetch("/components/abutton-44_corp.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("abutton-44_corp").innerHTML = document.getElementById("abutton-44_corp").innerHTML + data;
  });
