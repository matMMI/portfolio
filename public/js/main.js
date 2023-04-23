function initIsotope() {
  var $grid = $(".item-detail").isotope({});
  $(".item-menu").on("click", "li ", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
}

$(document).ready(function () {
  $(document).imagesLoaded(function () {
    initIsotope();
    // Force le re-layout pour éviter les problèmes de superposition
    setTimeout(function () {
      $(".item-detail").isotope("layout");
    }, 100);
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
