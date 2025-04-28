function Calc() {
    let P = Number(document.getElementById("principle").value); // Principal
    let r = Number(document.getElementById("irate").value)/100; // Annual interest rate
    let n = 12;   // Number of times compounded per year
    let t = Number(document.getElementById("year").value);   // Number of years
    let m = Number(document.getElementById("monthpayment").value);   // Monthly payment
  
    let base = 1 + r / n;
    let exponent = n * t;
    let part1 = P * Math.pow(base, exponent);
    let part2 = m * ((Math.pow(base, exponent) - 1) / (r / n));
    let B = part1 - part2;
  
    document.getElementById("out").innerHTML = String(B.toFixed(2));
  }

function Reset() {
    document.getElementById("principle").value = 0;
    document.getElementById("irate").value = 0;
    document.getElementById("year").value = 0;
    document.getElementById("monthpayment").value = 0;
    document.getElementById("out").innerHTML = "0.00";
}