const scale = document.getElementById("scale");
const text = document.getElementById("text");

text.textContent = scale.value;

scale.addEventListener("input", () => {

    text.textContent = scale.value;

  });