// const toggle = document.querySelector("#toggle");

const pricing = Array.from(document.querySelectorAll("[data-show]"));

const togglePricingInput = Array.from(
  document.querySelectorAll("[name='Payment-type']")
);

togglePricingInput.forEach((input) =>
  input.addEventListener("input", togglePrice)
);

function togglePrice(e) {
  console.log(e.target.value);
  pricing.forEach((price) => {
    let isToggled = price.getAttribute("data-show");
    let isMonthly = price.getAttributeNames("data-Monthly");
    let isAnnually = price.getAttributeNames("data-annually");
    console.log(isToggled);

    if (isToggled === "false") {
      price.setAttribute("data-show", "true");
    } else {
      price.setAttribute("data-show", "false");
    }
  });
}

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
