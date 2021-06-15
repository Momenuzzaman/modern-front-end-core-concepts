fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => showUser(data));

function showUser(data){
    let userHTML = "";
    data.forEach(user => {
        userHTML = userHTML + `<div class="user">
            <h2>Name: ${user.name}</h2>
             <p>Email: ${user.email}</p>
             <p>City: ${user.address.city}</p>
        </div>`;
    });
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = userHTML;
}