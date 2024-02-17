function spinWheel() {
    const targetUrl = './endpoint.json';  // Relative path
    fetch(targetUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Response data:', data);

            const position = data.POSITION;
            console.log('Position:', position);

            const angle = 360 / numberOfWheelSections() * position;
            console.log('Calculated Angle:', angle);

            const wheel = document.getElementById('wheel');
            wheel.style.transition = 'transform 3s ease-out';
            wheel.style.transform = `rotate(${angle}deg)`;

            console.log('Wheel rotated!');
        })
        .catch(error => console.error('Error:', error));
}

function numberOfWheelSections() {
    // Change this function to return the actual number of sections on your wheel
    return 8;
}