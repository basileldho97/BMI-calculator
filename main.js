function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmiValue').textContent = bmi;
                    // bmi claculate
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi <= 25) category = 'Normal';
        else if (bmi > 25 && bmi <= 30) category = 'Overweight';
        else category = 'Obesity';
        document.getElementById('bmiCategory').textContent = category;
                    // bmiprime
        const bmiPrime = (bmi / 25).toFixed(2);
        document.getElementById('bmiPrime').textContent = bmiPrime;
                    // index
        const ponderalIndex = (bmi / height).toFixed(1);
        document.getElementById('ponderalIndex').textContent = ponderalIndex;

        const minWeight = (18.5 * height * height).toFixed(1);
        const maxWeight = (25 * height * height).toFixed(1);
        document.getElementById('healthyWeight').textContent = `Healthy weight range: ${minWeight} - ${maxWeight} kg`;
                // bmi needle
        const needle = document.getElementById('bmiNeedle');
        const rotation = Math.min(Math.max((bmi - 16) * 4.5, 0), 180);
        needle.style.transform = `rotate(${rotation - 90}deg)`;

        document.getElementById('resultBox').classList.add('show');
    } else {
        alert('Please enter valid height and weight values.');
    }
}

function clearForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('bmiValue').textContent = '--';
    document.getElementById('bmiCategory').textContent = '--';
    document.getElementById('bmiPrime').textContent = '--';
    document.getElementById('ponderalIndex').textContent = '--';
    document.getElementById('healthyWeight').textContent = 'Healthy weight range: -- kg';
    const needle = document.getElementById('bmiNeedle');
    needle.style.transform = 'rotate(-90deg)';
    document.getElementById('resultBox').classList.remove('show');
}