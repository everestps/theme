console.log("PLP Theme activated")
document.styleSheets[0].disabled = true;
$('a.brand').html('<img alt="Logo-horiz" src="/assets/logo-horiz-390ef8d2489bce7aa07b97b813f028f8.png">');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-user"]').html('Alex<b class="caret"></b>');
$('ul.nav>li.dropdown>a.dropdown-toggle[data-target="dropdown-help"]').remove();
$('.the-line').hide();
$('title').html('PLP');
var toggle = "javascript:$('.the-line').toggle()";
$('ul#dropdown-user>li').append('<a href="' + toggle + '">Toggle Line</a>')
$('.dropdown-menu.pull-right').append('<a href="http://tinyurl.com/everestgrade9" target="_blank">Everest Grade 9 <i class="icon-external-link small"></i></a>');
$("body").keydown(function(e) {
  if(e.keyCode == 76) {
    $(".the-line").toggle();
  }
  if(e.keyCode == 68) {
    window.location.href = 'https://app.mysummitps.org/my/dashboard';
  }
  if(e.keyCode == 89) {
    window.location.href = 'https://app.mysummitps.org/my/year';
  }
  if(e.keyCode == 67) {
    window.location.href = 'https://app.mysummitps.org/my/college/step/0';
  }
  if(e.keyCode == 82) {
    window.location.href = 'https://app.mysummitps.org/my/reflections';
  }
  if(e.keyCode == 71) {
    window.location.href = 'https://app.mysummitps.org/my/grades';
  }
});
$('.icon-holder').remove()
$('.row-fluid>.span8').css('padding-top', '10px')
