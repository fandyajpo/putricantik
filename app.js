const about_me_button = document.querySelector(".button_about_me");
const about_you_button = document.querySelector(".button_about_you");

const about_me = document.querySelector(".about_me");
const about_you = document.querySelector(".about_you");

//default state
about_you.style.display = "none";

//this is temporary state like react, the button return a temporary value after clicked
about_me_button.addEventListener("click", () => {
  about_me.style.display = "block";
  about_you.style.display = "none";
});

about_you_button.addEventListener("click", () => {
  about_me.style.display = "none";
  about_you.style.display = "block";
});
