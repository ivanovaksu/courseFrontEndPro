fetch('https://api.github.com/users')
.then((response) => {
    return response.json();
})
.catch(error => {
    alert('error:', error)
})
.then((data) => {
    data.slice(0, 10).map(user => {
        document.write(`<h3>ID: ${user.id}</h3>
        <p>Login: ${user.login}</p>
        <p>Avatar user: <br> <a href="${user.avatar_url}">${user.avatar_url}</a></p>
        <hr>`);
    });
})