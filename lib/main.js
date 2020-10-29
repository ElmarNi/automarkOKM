$(document).ready(function () {
  jQuery.fn.clickOutside = function (callback) {
    var $me = this;
    $(document).mouseup(function (e) {
      if (!$me.is(e.target) && $me.has(e.target).length === 0) {
        callback.apply($me);
      }
    });
  };

  $("#small-screens .open-menu").click(function (e) {
    e.preventDefault();
    $("#small-screens .menu").slideToggle("fast");
    $("body").toggleClass("overflow-y-hidden");
    $(this).find("i").toggleClass("fa-times");
  });
  $("#small-screens").clickOutside(function () {
    $("#small-screens .menu").slideUp("fast");
    $("body").removeClass("overflow-y-hidden");
    $(this).find("i").removeClass("fa-times");
  });
  let skip = parseInt($("#cars .skip").text());
  let cars = document.querySelectorAll("#cars .col-lg-4");
  let carsSum = cars.length;

  for (let i = 0; i < 3; i++) {
    $(cars[i]).removeClass("d-none");
  }

  $(document).on('scroll', function () {
    if (skip < carsSum) {
      if ($(document).scrollTop() >= $("#small-screens").outerHeight() + $("#slider").outerHeight() + $("#empty").outerHeight() + $("#cars").outerHeight() - ($("#calltoaction").outerHeight() + $("footer").outerHeight() + 200)) {
        for (let i = skip; i < skip + 3; i++) {
          $(cars[i]).removeClass("d-none");
        }

        skip = skip + 3;
        $("#cars .counter").text(skip);
      }
    }
  });
});