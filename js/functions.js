/************************************************

JAVASCRIPT FOR STICKY NAVIGATION AFTER SCROLL

*************************************************/

(new IntersectionObserver(function(e, o) {
  if (e[0].intersectionRatio > 0) {
    /** Hvis websitets viewport er på 0 (ingen scroll foretaget), så vises der en ganske normal navigation**/
    document.documentElement.removeAttribute('class');
  } else {
    /** når man scroller så aktiveres class 'stuck' og navigationen følger med **/
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


/************************************************

JAVASCRIPT TO DISPLAY ALL CLIENTS

*************************************************/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show All";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "flex";
  }
};


/************************************************

JAVASCRIPT FOR FAQ TAB (PLUS TO MINUS)

*************************************************/

function toggleIcon(e) {
  $(e.target)
    .prev('.panel-heading')
    .find(".short-full")
    .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);



/************************************************

JAVASCRIPT FOR DATE & TIMEPICKER

*************************************************/
