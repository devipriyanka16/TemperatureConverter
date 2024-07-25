function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitInput = document.querySelector('input[name="unit"]:checked').value;
    let result;

    if (isNaN(tempInput)) {
        alert('Please enter a valid number.');
        document.getElementById('result').innerHTML = ''; // Clear previous result
        return;
    }

    switch (unitInput) {
        case 'celsius':
            result = {
                fahrenheit: (tempInput * 9/5) + 32,
                kelvin: tempInput + 273.15
            };
            document.getElementById('result').innerHTML = `
                <p>${tempInput.toFixed(2)}°C is equal to ${result.fahrenheit.toFixed(2)}°F</p>
                <p>${tempInput.toFixed(2)}°C is equal to ${result.kelvin.toFixed(2)}K</p>
            `;
            break;
        case 'fahrenheit':
            result = {
                celsius: (tempInput - 32) * 5/9,
                kelvin: (tempInput - 32) * 5/9 + 273.15
            };
            document.getElementById('result').innerHTML = `
                <p>${tempInput.toFixed(2)}°F is equal to ${result.celsius.toFixed(2)}°C</p>
                <p>${tempInput.toFixed(2)}°F is equal to ${result.kelvin.toFixed(2)}K</p>
            `;
            break;
        case 'kelvin':
            result = {
                celsius: tempInput - 273.15,
                fahrenheit: (tempInput - 273.15) * 9/5 + 32
            };
            document.getElementById('result').innerHTML = `
                <p>${tempInput.toFixed(2)}K is equal to ${result.celsius.toFixed(2)}°C</p>
                <p>${tempInput.toFixed(2)}K is equal to ${result.fahrenheit.toFixed(2)}°F</p>
            `;
            break;
        default:
            document.getElementById('result').innerHTML = 'Error: Invalid unit selected.';
            break;
    }
}
