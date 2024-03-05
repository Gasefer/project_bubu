const radioGroup = document.querySelector(".radio-group");

radioGroup.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  const labels = radioGroup.querySelectorAll("label");

  for (const label of labels) {
    if (label.htmlFor === selectedOption) {
      label.style.fontWeight = "700";
    } else {
      label.style.fontWeight = "300";
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});
