$(document).imagesLoaded(function () {
  var $grid = $(".item-detail").isotope({});
  $(".item-menu").on("click", "li ", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});

const closeButton = document.querySelector(".close");
const btnFilter = document.querySelector(".btnFilter");
const filter = document.querySelector(".filter");

closeButton.addEventListener("click", function () {
  filter.style.transform = "translateY(150%)";
  btnFilter.style.transform = "translateY(0%)";
});

btnFilter.addEventListener("click", function () {
  filter.style.transform = "translateY(0%)";
  btnFilter.style.transform = "translateY(150%)";
});
