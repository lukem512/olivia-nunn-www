// Globals
var prevMapWidth = 0;

// Update top margin size
function updateMargin() {
  // Update the margin
  var width = jQuery(window).width();
  $('#spacer-top').css('height', width / 20);
  $('#spacer-bottom').css('height', width / 20)
};
updateMargin();

// Show the map in the background
function showGoogleMaps() {
  var latLng = new google.maps.LatLng(51.471948, -2.578000);

  var mapOptions = {
    zoom: 16,
    streetViewControl: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  map = new google.maps.Map(document.getElementById('maps'),
    mapOptions);
};

// Redraw the website
function redraw() {
  updateMargin();

  // Update the map if we need more width!
  var width = jQuery(window).width();
  if (width > 0 && width > prevMapWidth) {
    showGoogleMaps();
    prevMapWidth = width;
  }

  // Ensure the map is full height
  var height = $('#container').height();
  height += (height / 10);
  document.getElementById('maps').style.height = height + 'px';
};

window.onload = function(e) {
  redraw();
};

window.onresize = function(e) {
  redraw();
};
