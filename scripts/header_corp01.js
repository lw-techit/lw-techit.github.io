fetch("/components/header_corp01.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header_corp01").innerHTML = document.getElementById("header_corp01").innerHTML + data;
  });
