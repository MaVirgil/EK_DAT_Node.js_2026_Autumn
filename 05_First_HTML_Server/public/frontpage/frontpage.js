fetch('/api/counter')
    .then((response) => response.json())
    .then((result) => {
        const counterElement = document.getElementById('counter');
        counterElement.innerText = result.data;
    });