const buttons = document.querySelectorAll("input[type=button]");
const display = document.querySelector("input[type=text]");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let n = 0;
    if (button.value == "=") {
      display.value = eval(display.value);
    } else if (button.value == "AC") {
      display.value = "";
    } else if (button.value == "DEL") {
      display.value = display.value.slice(0, n - 1);
    } else {
      display.value += button.value;
      n++;
    }
  });
});
