new Splide(".splide", {
  type: "loop",
  perPage: 2,
  fixedWidth: 275,
  fixedHeight: 330,
  gap: 25,
  padding: {
    right: "8rem",
    left: "8rem",
  },
}).mount();

$("#arrow-down").on("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});
