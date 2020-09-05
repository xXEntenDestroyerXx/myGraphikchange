console.log('Hello World!')
document.getElementById('post1').addEventListener('click', event => {
    fetchPost(1);
})

document.getElementById('post2').addEventListener('click', event => {
    fetchPost(2);
})

document.getElementById('post3').addEventListener('click', event => {
    fetchPost(3);
})

document.getElementById('post4').addEventListener('click', event => {
    fetchPost(4);
})

document.getElementById('post5').addEventListener('click', event => {
    fetchPost(5);
})

document.getElementById('post0').addEventListener('click', event => {
    fetchPost(0);
})

document.getElementById('post6').addEventListener('click', event => {
    fetchPost(6);
})

document.getElementById('post8').addEventListener('click', event => {
    fetchPost(8);
})

document.getElementById('post10').addEventListener('click', event => {
    fetchPost(10);
})

document.getElementById('post11').addEventListener('click', event => {
    fetchPost(11);
})

document.getElementById('post12').addEventListener('click', event => {
    fetchPost(12);
})

document.getElementById('post13').addEventListener('click', event => {
    fetchPost(13);
})

function fetchPost(message){
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
}