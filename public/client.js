console.log('Hello World!')
document.getElementById('post1').addEventListener('click', event => {
    const message = 1;
    const data = {message};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/api', options).then(response => {
        console.log(response.json());
    });
})
//