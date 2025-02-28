const blockcodes = document.querySelectorAll(".chroma code[data-lang]");

for (const bc of blockcodes) {
  const parent = bc.parentElement;
  const content = bc.innerText.split("\n").filter(Boolean).join("\n");
  const cpbutton = document.createElement("button");
  cpbutton.classList.add("copy-button");
  cpbutton.innerText = "Copy";

  cpbutton.addEventListener("click", () => {
    cpbutton.innerText = "Copied";
    setTimeout(() => {
      cpbutton.innerText = "Copy";
    }, 1000);

    navigator.clipboard.writeText(content);
  });

  parent.prepend(cpbutton);
}
