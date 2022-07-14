const toggle = document.querySelector("#toggle");

const pricing = Array.from(document.querySelectorAll("[data-show]"));

const att = document.querySelector(".att");

att.addEventListener("mouseover", () => {
  const footer = document.querySelector("footer");
  const isAtt = footer.getAttribute("data-att");

  if (isAtt === "false") {
    footer.setAttribute("data-att", "true");
  } else {
    footer.setAttribute("data-att", "false");
  }
});

toggle.addEventListener("click", (e) => {
  pricing.forEach((price) => {
    const isShow = price.getAttribute("data-show");

    if (isShow === "false") {
      price.setAttribute("data-show", "true");
    } else {
      price.setAttribute("data-show", "false");
    }
  });
});
