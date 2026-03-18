fetch("/components/abutton-44_indbr.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("abutton-44_indbr").innerHTML = document.getElementById("abutton-44_indbr").innerHTML + data;
  });
