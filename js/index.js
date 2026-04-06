
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
          <p>EM APENAS ${c.duration}</p>
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
          <p>EM APENAS ${c.duration}</p>
          <h2>${formatCurrency(c.price)} Mt</h2>
          <a href="./signup.html?c=${c.id}">Cadastrar-se</a>
        </div>
      </div>
    `;
    }
  }

  document.querySelector(".courses").innerHTML = cs;
});
