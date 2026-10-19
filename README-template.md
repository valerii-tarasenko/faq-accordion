# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub repository](https://github.com/valerii-tarasenko/faq-accordion)
- Live Site URL: [Live site](https://valerii-tarasenko.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

### What I learned

In this project I understood JavaScript better and wrote more of the code on my own. The main new thing was working with several similar elements at once. At first only the first question worked, because `querySelector` returns only one element. I fixed it with `querySelectorAll` and `forEach`:

```js
const buttons = document.querySelectorAll(".faq__question");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    answer.classList.toggle("hidden");
  });
});
```

I also learned that the `+` / `-` icon can be controlled by CSS using the `aria-expanded` attribute, so JavaScript only changes the state and CSS handles the look:

```css
.faq__question[aria-expanded="true"]::after {
  background-image: url("../assets/images/icon-minus.svg");
}
```

There are still some things I am not sure how to implement yet, but I now find the problem and search for a solution on my own more often.

### Continued development

- Writing more of the layout and JavaScript without hints.

## Author

- Frontend Mentor - [@valerii-tarasenko](https://www.frontendmentor.io/profile/valerii-tarasenko)
- GitHub - [valerii-tarasenko](https://github.com/valerii-tarasenko)
