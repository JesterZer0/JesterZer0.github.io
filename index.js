document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      this.querySelector('.dropdown-content').classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
      this.querySelector('.dropdown-content').classList.remove('show');
    });
  });
});


$(document).ready(function(){
    $(".logo-container").hide();
    $(".logo-container").show("slow");

    $(".navbar").hide();
    $(".navbar").show("slow");

    $("#name").hide();
    $("#name").show("slow");

    $("#skill").hide();
    setTimeout(function(){
      $("#skill").show("slow");
    }, 500);

    $("#short-des").hide();
    setTimeout(function(){
      $("#short-des").show("slow");
    }, 1000);

    $("#learnmore").hide();
    setTimeout(function(){
      $("#learnmore").show("slow");
    }, 1000);
  });

