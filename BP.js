function result() {
    var a = parseFloat(document.getElementById("systolic").value);
    var b = parseFloat(document.getElementById("diastolic").value);

    var x, y;

    if (isNaN(a) || isNaN(b)) {
        alert("Enter valid numeric values for both Systolic and Diastolic Pressure.");
    } else {
        if (a < 120) {
            x = "Normal Blood Pressure";
        } else if (a <= 129) {
            x = "Elevated Blood Pressure";
        } else if (a <= 139) {
            x = "Hypertension Stage 1";
        } else {
            x = "Hypertension Stage 2";
        }

        if (b < 80) {
            y = "Normal Blood Pressure";
        } else if (b <= 80) {
            y = "Elevated Blood Pressure";
        } else if (b <= 89) {
            y = "Hypertension Stage 1";
        } else {
            y = "Hypertension Stage 2";
        }

        document.getElementById("report").innerHTML = (`Systolic Pressure: ${a}. ${x} + Diastolic Pressure: ${b}. ${y}`);
    }
}
