var robux_textbox = document.getElementById("robux");
robux_textbox.oninput = function() {
    var txt = robux_textbox.value;
    var amount = parseFloat(txt);

    var final = amount / 1000 * 7.05;
    final = final.toFixed(2);

    document.getElementById("result").textContent = "Result: " + final
}