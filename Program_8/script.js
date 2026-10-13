async function fetchUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();

        let rows = "";
        users.forEach(u => {
            rows += `<tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
            </tr>`;
        });

        document.getElementById("data").innerHTML = rows;
    } catch (err) {
        alert("Failed to load data.");
    }
}