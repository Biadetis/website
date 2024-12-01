document
  .querySelector("Meine-Projekte")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector("#Meine-Projekte");
    target.scrollIntoView({ behavior: "smooth" });
  });
