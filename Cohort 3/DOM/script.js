const form = document.querySelector(".form");
const feat = document.querySelector("#feat");
const sol = document.querySelector("#enter");
const res = document.querySelector("#res");
const feature = document.querySelector("#featu");
const solution = document.querySelector("#solu");
const resource = document.querySelector("#reso");
const sign = document.querySelector(".signin");
const close = document.querySelector("#close");
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const main = document.querySelector("main");


sign.addEventListener("click", () => {
      form.style.display = "flex";
      main.style.display = "none";
      feat.style.display = "none";
      sol.style.display = "none";
      res.style.display = "none";

});

close.addEventListener("click", () => {
      form.style.display = "none";
      main.style.display = "flex";
      feat.style.display = "none";
      sol.style.display = "none";
      res.style.display = "none";
});

form.addEventListener("submit", (events) => {
  events.preventDefault();
  let emails = email.value;

  if (emails.trim() === "") return alert("pahle bahro phir hi😶‍🌫️ agye jaoge😏");
  form.reset();
});

feature.addEventListener("click", () => {
      feat.style.display = "flex";
      sol.style.display = "none";
      res.style.display = "none";
});

feature.addEventListener("dblclick", () => {
      feat.style.display = "none";
});

solution.addEventListener("click", () => {
      sol.style.display = "flex";
      feat.style.display = "none";
      res.style.display = "none";
});

solution.addEventListener("dblclick", () => {
      sol.style.display = "none";
});

resource.addEventListener("click", () => {
      res.style.display = "flex";
      feat.style.display = "none";
      sol.style.display = "none";
});

resource.addEventListener("dblclick", () => {
      res.style.display = "none";
});