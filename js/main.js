const form = document.querySelector(".search-form");
const search = document.querySelector("#search");
const user_found = document.querySelector(".user-found");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (search.value) {
    fetch(`https://api.github.com/users/${search.value}`)
      .then((res) => res.json())
      .then((data) => displayUser(data));
  }
}
function displayUser(user) {
  user_found.innerHTML = `<div class="user">
  <div class="user-avatar">
    <img src="${user.avatar_url}"/>
  </div>
  <h3 class="user_fullname">${user.name}</h3>
  <p class="user_bio">${user.bio}</p>
  <ul class="user-details">
    <li class="detail">
      <h5>Following <span>${user.following}</span></h5>
    </li>
    <li class="detail">
      <h5>Followers <span>${user.followers}</span></h5>
    </li>
    <li class="detail">
      <h5>Repos <span>${user.public_repos}</span></h5>
    </li>
    <li class="detail">
      <h5>Gists <span>${user.public_gists}</span></h5>
    </li>
  </ul>
  <div class="visit-user">
    <a href="${user.html_url}">See On Github</a>
  </div>
</div>
    `;
}
function displayError(error) {
  user_found.innerHTML = `
  <div class="user">
  <h2>${error}</h2>
  </div>
  `;
}
