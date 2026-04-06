const api_url = window.location.protocol.toLowerCase().includes("s")
  ? "https://api-master.onrender.com"
  : "http://localhost:8000";

let menuHidden = true;

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  $(".menu").animate({ left: menuHidden ? 0 : "-80%" }, 500);
  menuHidden = !menuHidden;
});

awakeAPI();

setInterval(async () => {
  awakeAPI();
}, 30000);

const numColor = 255;

async function awakeAPI() {
  try {
    const res = await fetch(api_url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
