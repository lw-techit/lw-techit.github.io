fetch("/components/companyinfo.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("companyinfo").innerHTML = document.getElementById("companyinfo").innerHTML + data;
  });
