let stepsBtn = document.querySelectorAll(".step__button");
let stepsItem = document.querySelectorAll(".steps-item");

stepsBtn.forEach(function(element) {
  element.addEventListener("click", function(e) {
    const path = e.currentTarget.dataset.path;

    stepsBtn.forEach(function(btn) { btn.classList.remove("step__button--active") });
    e.currentTarget.classList.add("step__button--active")

    stepsItem.forEach(function(element) { element.classList.remove("steps-item--active") });
    document.querySelector(`[data-target="${path}"]`).classList.add("steps-item--active");

  })
})
