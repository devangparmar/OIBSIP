function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid number.';
    } else {
        if (inputUnit === outputUnit) {
            result = `The temperature is the same: ${temp.toFixed(2)}°${outputUnit}`;
        } else {
            switch (inputUnit) {
                case 'C':
                    if (outputUnit === 'F') {
                        result = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F`;
                    } else if (outputUnit === 'K') {
                        result = `${temp}°C = ${(temp + 273.15).toFixed(2)}K`;
                    }
                    break;
                case 'F':
                    if (outputUnit === 'C') {
                        result = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`;
                    } else if (outputUnit === 'K') {
                        result = `${temp}°F = ${((temp - 32) * 5/9 + 273.15).toFixed(2)}K`;
                    }
                    break;
                case 'K':
                    if (outputUnit === 'C') {
                        result = `${temp}K = ${(temp - 273.15).toFixed(2)}°C`;
                    } else if (outputUnit === 'F') {
                        result = `${temp}K = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                    }
                    break;
                default:
                    result = 'Please select a valid unit.';
            }
        }
    }

    document.getElementById('result').textContent = result;
}
