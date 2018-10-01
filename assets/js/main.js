"use strict";

$(document).ready(function () {

  // Sidebar nav behavior
  $('.menu__button').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});