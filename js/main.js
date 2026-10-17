const buttons = document.querySelectorAll(".faq__question");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      button.setAttribute("aria-expanded", "false");
      answer.classList.add("hidden");
    } else {
      button.setAttribute("aria-expanded", "true");
      answer.classList.remove("hidden");
    }
  });
});
