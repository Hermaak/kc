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

let css = "";
for (const c of courses) {
  css += c.label + ", ";
}
console.log(css);

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

function getCourses() {
  let cs = "";

  for (const c of courses) {
    if (c.show) {
      const _color = `rgb(${random(numColor)}, ${random(numColor)}, ${random(numColor)})`;
      const color = c.colors ? c.colors[0] : _color;
      cs += `
     <div class="course">
        <div class="top" style="background: ${color}">
          <!--<strong><i class='la la-graduation-cap'></i> Curso</strong>-->
          <h3>${c.icon + " " + c.label}</h3>
          <a href="./pages/plans/${c.plan || ""}">Plano do curso</i></a>
        </div>
        <div class="bottom">
          <p>EM APENAS ${c.month} MESES</p>
          <h2>${formatCurrency(c.price)} Mt</h2>
          <a href="./signup.html?c=${c.id}">Cadastrar-se</a>
        </div>
      </div>
  `;
    }
  }

  document.querySelector(".courses").innerHTML = cs;
}

getCourses();

document.querySelector("input").addEventListener("input", (e) => {
  let cs = "";
  for (const c of courses) {
    const _color = `rgb(${random(numColor)}, ${random(numColor)}, ${random(numColor)})`;
    const color = c.colors ? c.colors[0] : _color;
    if (
      c.label.toLowerCase().includes(e.target.value.toLowerCase()) &&
      c.show
    ) {
      cs += `
      <div class="course">
        <div class="top" style="background: ${color}">
          <!--<strong><i class='la la-graduation-cap'></i> Curso</strong>-->
          <h3>${c.icon + " " + c.label}</h3>
          <a href="./pages/plans/${c.plan || ""}">Plano do curso</i></a>
        </div>
        <div class="bottom">
          <p>EM APENAS ${c.month} MESES</p>
          <h2>${formatCurrency(c.price)} Mt</h2>
          <a href="./signup.html?c=${c.id}">Cadastrar-se</a>
        </div>
      </div>
    `;
    }
  }

  document.querySelector(".courses").innerHTML = cs;
});
