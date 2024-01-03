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