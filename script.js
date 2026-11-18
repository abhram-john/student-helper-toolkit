
function calculate() {
    let total = Number(document.getElementById("total").value);
    let attended = Number(document.getElementById("attended").value);

    if (total <= 0 || attended < 0 || attended > total) {
        document.getElementById("result").innerText =
            "Please enter valid numbers";
        return;
    }

    let percentage = (attended / total) * 100;

    document.getElementById("result").innerText =
        "Your attendance is " + percentage.toFixed(2) + "%";
}
