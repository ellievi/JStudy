const div = document.getElementById('users');
const listUsers = 'https://jsonplaceholder.typicode.com/users';

fetch(listUsers)
.then((res) => res.json())
.then((data) => { 
    console.log(data)

    data.map(user => {
        let li = document.createElement('li');
        li.innerHTML = `${user.email} (${user.username})`
        div.appendChild(li)
    })
})
.catch((error) => {
    console.log('Oops!' + error)
})