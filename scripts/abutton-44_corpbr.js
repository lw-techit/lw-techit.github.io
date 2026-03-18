fetch("/components/abutton-44_corpbr.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("abutton-44_corpbr").innerHTML = document.getElementById("abutton-44_corpbr").innerHTML + data;
  });
