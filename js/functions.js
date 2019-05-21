/************************************************

JAVASCRIPT FOR STICKY NAVIGATION AFTER SCROLL

*************************************************/

(new IntersectionObserver(function(e, o) {
  if (e[0].intersectionRatio > 0) {
    document.documentElement.removeAttribute('class');
  } else {
    document.documentElement.setAttribute('class', 'stuck');
  };
})).observe(document.querySelector('.trigger'));


/************************************************

JAVASCRIPT FOR DROPDOWN ON HOVER

*************************************************/

(document).ready(function() {
  $(".dropdown, .btn-group").hover(function() {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
