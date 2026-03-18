fetch("/components/paymentmethods.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("paymentmethods").innerHTML = document.getElementById("paymentmethods").innerHTML + data;
  });
