# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

- [ ] Add a metric conversion tool.

- [ ] Integrate a task list with array storage.

- [ ] Add JavaScript logic for a live clock.

- [x] Add a weekly task goal calculator.

## Weekly Task Goals

This feature calculates a user's weekly task goal based on their daily task goal and any additional weekly bonus tasks.

## Imperial/Metric Converter

This application converts measurements between Imperial and Metric units. It can convert inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode
```javascript
// Metric Converter

var value = prompt('Enter the value to convert:');
value = parseFloat(value);

var conversion = prompt('Enter the conversion choice (e.g., inch to centimeter):');
var result;

if (conversion === 'inch to centimeter') {
    result = value * 2.54;
    alert(result);
} else if (conversion === 'foot to centimeter') {
    result = value * 30.48;
    alert(result);
} else if (conversion === 'yard to meter') {
    result = value * 0.91;
    alert(result);
} else if (conversion === 'mile to kilometer') {
    result = value * 1.61;
    alert(result);
} else if (conversion === 'centimeter to inch') {
    result = value * 0.39;
    alert(result);
} else if (conversion === 'centimeter to foot') {
    result = value * 0.0328;
    alert(result);
} else if (conversion === 'meter to yard') {
    result = value * 1.09;
    alert(result);
} else if (conversion === 'kilometer to mile') {
    result = value * 0.62;
    alert(result);
} else {
    alert('Invalid conversion choice');
}
```
