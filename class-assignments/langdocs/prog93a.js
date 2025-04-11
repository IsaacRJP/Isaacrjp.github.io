function Calculate() {
    let input = Number(document.getElementById(kwhour));
    let baserate = input * 4.75;
    let surcharge = baserate * 0.10;
    let tax = baserate * 0.03;
    let totalpay = baserate + surcharge + tax;

    let out="";
    let out2="";
    out+= "Total:" + totalpay;
    document.getElementById("output").innerHTML = out;
}