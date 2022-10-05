$.fn.parallax = function(resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function(e) {
  $(".circle").parallax(-50, e);
  $(".discovery, .design, .development, .discoverability").parallax(30, e);
  // $(".design").parallax(20, e);
  $(".discovery .icon, .design .icon, .development .icon, .discoverability .icon").parallax(50, e);
  $(".discovery .name, .design .name, .development .name, .discoverability .name").parallax(50, e);
   $(".discovery .number, .design .number, .development .number, .discoverability .number").parallax(50, e);
  $(".circle-front").parallax(20, e);
  });
