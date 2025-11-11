const fetchBtn = document.getElementById("fetchBtn");
const userContainer = document.getElementById("userContainer");

fetchBtn.addEventListener("click", fetchUserData);

function fetchUserData() {
  fetch("https://jsonplaceholder.typicode.com/users") // Public test API
    .then((response) => response.json()) // Parse JSON
    .then((data) => displayUsers(data)) // Display data
    .catch((error) => {
      userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error}</p>`;
    });
}

function displayUsers(users) {
  userContainer.innerHTML = ""; // Clear existing data

  users.slice(0, 5).forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;

    userContainer.appendChild(card);
  });
}
