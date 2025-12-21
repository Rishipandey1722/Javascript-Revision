const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (evnt) => {
    // console.log(evnt);
    // console.log(evnt.target);

    if (evnt.target.id === "grey") {
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "blue") {
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "yellow") {
      body.style.backgroundColor = evnt.target.id;
    }
    if (evnt.target.id === "white") {
      body.style.backgroundColor = evnt.target.id;
    }
  });
});
