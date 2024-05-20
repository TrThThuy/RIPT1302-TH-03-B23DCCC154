async function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    const operations = ['add', 'subtract', 'multiply', 'divide'];
    const results = {};

    for (let operation of operations) {
        const response = await fetch(`http://localhost:8000/${operation}?a=${num1}&b=${num2}`);
        const data = await response.json();
        results[operation] = data.result !== undefined ? data.result : data.error;
    }

    document.getElementById('sum').value = results.add;
    document.getElementById('difference').value = results.subtract;
    document.getElementById('product').value = results.multiply;
    document.getElementById('quotient').value = results.divide;
}

