async function fetchUsers() {
  try {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    document.getElementById("data").innerHTML = users
      .map(u => `<tr><td>${u.id}</td><td>${u.name}</td><td>${u.email}</td></tr>`)
      .join("");
  } catch {
    alert("Failed to load data.");
  }
}
