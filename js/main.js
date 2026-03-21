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

async function awakeAPI() {
  try {
    const res = await fetch(api_url);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}


let cs = "";

for (const c of courses) {
  if (c.show)
    cs += `
     <div class="course">
        <div class="top">
          <!--<strong><i class='la la-graduation-cap'></i> Curso</strong>-->
          <h3>${c.label}</h3>
          <a href="./details.html?c=${c.id}">Plano do curso</i></a>
        </div>
        <div class="bottom">
          <p>EM APENAS ${c.month} MESES</p>
          <h2>${formatCurrency(c.price)}</h2>
          <a href="./signup.html?c=${c.id}">Cadastrar-se</a>
        </div>
      </div>
  `;
}

document.querySelector(".courses").innerHTML = cs;

document.querySelector("input").addEventListener("input", (e) => {
  let cs = "";
  for (const c of courses) {
    if (
      c.label.toLowerCase().includes(e.target.value.toLowerCase()) &&
      c.show
    ) {
      cs += `
      <div class="course">
        <div class="top">
          <!--<strong><i class='la la-graduation-cap'></i> Curso</strong>-->
          <h3>${c.label}</h3>
          <a href="./etails.html?c=${c.id}">Plano do curso</i></a>
        </div>
        <div class="bottom">
          <p>EM APENAS ${c.month} MESES</p>
          <h2>${formatCurrency(c.price)}</h2>
          <a href="./signup.html?c=${c.id}">Cadastrar-se</a>
        </div>
      </div>
    `;
    }
  }

  document.querySelector(".courses").innerHTML = cs;
});
