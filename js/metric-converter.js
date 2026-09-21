let input_value = document.getElementById("input-value");
let select = document.getElementsByTagName("select")[0];
let button = document.getElementById("convert-btn");
let output = document.getElementById("conversion-result");

button.addEventListener("click", function(event) {
    event.preventDefault();

    let value = parseFloat(input.value);
    let conversion = select.selectedIndex;
    let result;

    if (conversion === 0) {
        result = value * 2.54;
        output.innerHTML = value + " inches is " + result + " centimeters";
    } else if (conversion === 1) {
        result = value * 30.48;
        output.innerHTML = value + " feet is " + result + " centimeters";
    } else if (conversion === 2) {
        result = value * 0.91;
        output.innerHTML = value + " yards is " + result + " meters";
    } else if (conversion === 3) {
        result = value * 1.61;
        output.innerHTML = value + " miles is " + result + " kilometers";
    } else if (conversion === 4) {
        result = value * 0.39;
        output.innerHTML = value + " centimeters is " + result + " inches";
    } else if (conversion === 5) {
        result = value * 0.0328;
        output.innerHTML = value + " centimeters is " + result + " feet";
    } else if (conversion === 6) {
        result = value * 1.09;
        output.innerHTML = value + " meters is " + result + " yards";
    } else if (conversion === 7) {
        result = value * 0.62;
        output.innerHTML = value + " kilometers is " + result + " miles";
    }
});