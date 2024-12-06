var x, y, z, p, q;

function result() {
    var a = document.getElementById("wbc").value;
    var b = document.getElementById("hmg").value;
    var c = document.getElementById("hmt").value;
    var d = document.getElementById("mcv").value;
    var e = document.getElementById("plate").value;
if(a!=" " || !a.match("^[0-9]$")){
    if (a >= 4500 && a <= 11000) {
        x = "Normal range";
    } else {
        x = "NOT Normal range";
    }
    //alert(x);
}
else{
    alert("Invalid input.");
}
if(b!=" " || b.match("^[0-9]$")){
    if (b >= 14 && b <= 17.5) {
        y = "Normal range";
    } else {
        y = "NOT Normal range";
    }
    //alert(y);
}
else{
    alert("Invalid input.");
}
if(c!=" " || c.match("^[0-9]$")){
    if (c >= 41.5 && c <= 50.4) {
        z = "Normal range";
    } else {
        z = "NOT Normal range";
    }
    //alert(z);
}
else{
    alert("Invalid input.");
}
    if(d!=" " || d.match("^[0-9]$")){
    if (d >= 80 && d <= 96) {
        p = "Normal range";
    } else {
        p = "NOT Normal range";
    }
    //alert(p);
    }
    else{
        alert("Invalid input.");
    }
    if(e!=" " || e.match("^[0-9]$")){
    if (e >= 150000 && e <= 450000) {
        q = "Normal range";
    } else {
        q = "NOT Normal range";
    }
    //alert(q);
    }
    else{
        alert("Invalid input.");
    }

    document.getElementById("report").innerHTML = (
        `White Blood Cells : Measured value is ${a}. ${x}<br>` +
        `Haemoglobin : Measured value is ${b}. ${y}<br>` +
        `Hematocrit: Measured value is ${c}. ${z}<br>` +
        `Mean corpuscular volume: Measured value is ${d}. ${p}<br>` +
        `Platelets : Measured value is ${e}. ${q}`
    );
}

