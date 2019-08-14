// HAMBURGER
const toggleBtn_div = document.querySelector("#toggle .hamburger");
const sideBar_div = document.querySelector("#sidebar-menu");

// LOGIN POP-UP
const loginForm_div = document.querySelector(".login-pop-up");

document.addEventListener("click", event => {
  const dropdownList_li = event.target.parentElement.parentElement;

  if (
    event.target.classList.contains("hamburger") ||
    event.target.classList.contains("line")
  ) {
    toggleBtn_div.classList.toggle("toggle");
    sideBar_div.classList.toggle("toggle");
  } else if (
    !(
      event.target === sideBar_div ||
      event.target.id === "sect-one" ||
      event.target.id === "sect-two" ||
      dropdownList_li.classList.contains("dropdown-list")
    )
  ) {
    sideBar_div.classList.remove("toggle");
    toggleBtn_div.classList.remove("toggle");
  }

  if (event.target.classList.contains("nav-login-btn"))
    loginForm_div.classList.add("loginPop");
  else if (event.target.classList.contains("login-form-close"))
    loginForm_div.classList.remove("loginPop");

  if (dropdownList_li.classList.contains("dropdown-list"))
    dropdownList_li.classList.toggle("toggle");
});
